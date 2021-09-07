import { ApplicationCommandData, Client, Collection } from 'discord.js'
import { Options } from '../interfaces/Options'
import { Command } from '../interfaces/Command'
import { Event } from '../interfaces/Event'
import { SlashCommand } from '../interfaces/SlashCommand'

// Promissify
import { promisify } from 'util'
import _glob from 'glob'

const glob = promisify(_glob)

export declare interface Handler {
    client: Client
    options: Options
    commands: Collection<string, Command>
    slashCommands: Collection<string, SlashCommand>
    events: Collection<string, Event>
}

/**
 * @class
 * @classdesc Main Class that including all Handling Functional
 */
export class Handler {
    /**
     *
     * @param {Client} client Discord Client
     * @param {Options} options Module Options
     *
     * @constructor
     */
    constructor(client: Client, options: Options) {
        /**
         * Discord.JS Client
         * @type {Client}
         */
        this.client = client

        /**
         * Module Options
         * @type {Options}
         */
        this.options = options

        /**
         * Commands Collection
         * @type {Collection<string, Command>}
         */
        this.commands = new Collection()

        /**
         * Slash Commands Collection
         * @type {Collection<string, SlashCommand>}
         */
        this.slashCommands = new Collection()

        /**
         * Events Collection
         * @type {Collection<string, Event>}
         */
        this.events = new Collection()

        this.client.on('ready', async () => {
            await this.registerSlashCommands()
        })

        this.client.on('interactionCreate', async (interaction) => {
            if (interaction.isCommand()) {
                const command = this.slashCommands.get(interaction.command.name)
                if (!command)
                    return console.log(
                        `[DJS-Handler] Slash Command with name '${interaction.command.name}' isn't found!`
                    )

                await command.run(client, interaction)
            }
        })
    }

    /**
     * Method that loads all the availible Commands
     *
     * @returns {Promise<boolean>}
     */
    loadCommands(): Promise<boolean> {
        return new Promise(async (res, rej) => {
            const commandFiles = await glob(
                this.options.commandsDir + this.options.searchPattern
            )
            if (!commandFiles.length)
                return rej(`[DJS-Handler] No Commands Found.`)

            commandFiles.forEach((val) => {
                const file: Command = require(val)

                this.commands.set(file.name, file)
                console.log(`[DJS-Handler] Command "${file.name}" loaded!`)
            })

            return res(true)
        })
    }

    /**
     * Method that loads all the availible Slash Commands
     *
     * @returns {Promise<boolean>}
     */
    loadSlashCommands(): Promise<boolean> {
        return new Promise(async (res, rej) => {
            const commandFiles = await glob(
                this.options.slashCommandsDir + this.options.searchPattern
            )
            if (!commandFiles.length)
                return rej(`[DJS-Handler] No Slash Commands Found.`)

            commandFiles.forEach((val) => {
                const file: SlashCommand = require(val)

                this.slashCommands.set(file.name, file)
                console.log(`[DJS-Handler] Command "${file.name}" loaded!`)
            })

            return res(true)
        })
    }

    /**
     * Method that loads all the availible Events
     *
     * @returns {Promise<boolean>}
     */
    loadEvents(): Promise<boolean> {
        return new Promise(async (res, rej) => {
            const eventFiles = await glob(
                this.options.eventsDir + this.options.searchPattern
            )
            if (!eventFiles.length) return rej(`[DJS-Handler] No Events Found.`)

            eventFiles.forEach((val) => {
                const file: Event = require(val)

                this.events.set(file.name, file)
                ;(file.emitter || this.client).on(file.name, (...args) =>
                    file.run(this.client, this, ...args)
                )

                console.log(`[DJS-Handler] Event "${file.name}" loaded!`)
            })

            return res(true)
        })
    }

    /**
     * Method that Registering Slash Commands to All the Guilds
     *
     * @private
     * @returns {Promise<boolean | string>}
     */
    private registerSlashCommands(): Promise<boolean | string> {
        return new Promise((res, rej) => {
            if (!this.slashCommands.size) return

            const commands: ApplicationCommandData[] = []
            this.slashCommands.forEach((cmd) => {
                commands.push({
                    name: cmd.name,
                    description: cmd.description,
                    type: cmd?.type,
                    options: cmd.options,
                    defaultPermission: cmd?.defaultPermission,
                })
            })

            return this.client.guilds.cache.forEach(async (guild) => {
                await guild?.commands
                    .set(commands)
                    .then(() => {
                        console.log('[DJS-Handler] Registered Slash Commands!')
                    })
                    .catch((err) => {
                        return rej(err)
                    })

                return res(true)
            })
        })
    }
}
