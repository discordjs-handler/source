import { ApplicationCommandData, Client, Collection } from "discord.js";
import { ApplicationCommandTypes } from "discord.js/typings/enums"; // Unused, but needed for typescript to know about it.
import { SlashCommand } from "./SlashCommand";
import { Options } from "../interfaces/Options";
import { Command } from "./Command";
import { Event } from "./Event";

// Promissify
import { promisify } from "util";
import _glob from "glob";

const glob = promisify(_glob);

export declare interface Handler {
  client: Client;
  options: Options;

  commands: Collection<string, Command>;
  slashCommands: Collection<string, SlashCommand>;
  events: Collection<string, Event>;
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
    this.client = client;

    /**
     * Module Options
     * @type {Options}
     */
    this.options = options;

    /**
     * Commands Collection
     * @type {Collection<string, Command>}
     */
    this.commands = new Collection();

    /**
     * Slash Commands Collection
     * @type {Collection<string, SlashCommand>}
     */
    this.slashCommands = new Collection();

    /**
     * Events Collection
     * @type {Collection<string, Event>}
     */
    this.events = new Collection();

    if (!this.options.debug) {
      this.options.debug = false;
    }

    if (!this.options.owners) {
      this.options.owners = [];
    }

    this.init();

    this.client.on("ready", async () => {
      if (!this.client.application.owner) await this.client.application.fetch();
      await this.registerSlashCommands();
    });
  }

  /**
   * Method that initializing module.
   *
   * @private
   * @returns {Promise<boolean>}
   */
  private init(): Promise<boolean> {
    return new Promise(async (res, rej) => {
      await this.loadCommands().catch(rej);
      await this.loadEvents().catch(rej);
      await this.loadSlashCommands().catch(rej);

      return res(true);
    });
  }

  /**
   * Method that loads all the availible Commands
   *
   * @returns {Promise<boolean>}
   */
  loadCommands(): Promise<boolean> {
    return new Promise(async (res, rej) => {
      const dir = this.options.commandsDir + this.options.searchPattern;
      const commandFiles = await glob(dir);

      if (!commandFiles.length) {
        return rej(`[DJS-Handler] No Commands Found.`);
      }

      for (const file of commandFiles) {
        const command: Command = new (await (await import(file)).default)();
        if (command.disabled) continue;

        this.commands.set(command.name, command);
        this.options.debug &&
          console.log(`[DJS-Handler] Command "${command.name}" loaded!`);
      }

      return res(true);
    });
  }

  /**
   * Method that loads all the availible Slash Commands
   *
   * @returns {Promise<boolean>}
   */
  loadSlashCommands(): Promise<boolean> {
    return new Promise(async (res, rej) => {
      const dir = this.options.slashCommandsDir + this.options.searchPattern;
      const commandFiles = await glob(dir);

      if (!commandFiles.length) {
        return rej(`[DJS-Handler] No Slash Commands Found.`);
      }

      for (const file of commandFiles) {
        const command: SlashCommand = new (await (
          await import(file)
        ).default)();
        if (command.disabled) continue;

        this.slashCommands.set(command.name, command);
        this.options.debug &&
          console.log(`[DJS-Handler] Slash Command "${command.name}" loaded!`);
      }

      return res(true);
    });
  }

  /**
   * Method that loads all the availible Events
   *
   * @returns {Promise<boolean>}
   */
  loadEvents(): Promise<boolean> {
    return new Promise(async (res, rej) => {
      const dir = this.options.eventsDir + this.options.searchPattern;
      const eventFiles = await glob(dir);

      if (!eventFiles.length) {
        return rej(`[DJS-Handler] No Events Found.`);
      }

      for (const file of eventFiles) {
        const event: Event = new (await (await import(file)).default)();
        this.events.set(event.name, event);

        (this.client[event.emitter] || this.client).on(event.name, (...args) =>
          event.run(this.client, this, ...args)
        );

        this.options.debug &&
          console.log(`[DJS-Handler] Event "${event.name}" loaded!`);
      }

      return res(true);
    });
  }

  /**
   * Method that Registering Slash Commands to All the Guilds
   *
   * @private
   * @returns {Promise<boolean | string>}
   */
  private registerSlashCommands(): Promise<boolean | string> {
    return new Promise(async (res, rej) => {
      if (!this.client.application.owner) await this.client.application.fetch();
      if (!this.slashCommands.size) return;

      const commands: ApplicationCommandData[] = [];
      this.slashCommands.forEach((cmd) => {
        commands.push({
          name: cmd.name,
          description: cmd.description,
          type: cmd?.type,
          defaultPermission: cmd?.defaultPermission,
          options: cmd?.options,
        });
      });

      return this.client.application.commands
        .set(commands)
        .then(() => {
          console.log("[DJS-Handler] Registered Slash Commands!");
        })
        .catch((reason) => {
          return rej(reason);
        });
    });
  }
}

/**
 * Module Options
 *
 * @typedef {Object} Options
 * @prop {boolean} [debug=false] Debug Mode
 * @prop {string} commandsDir Path to Commands Folder
 * @prop {string} slashCommandsDir Path to Slash Commands Folder
 * @prop {string} eventsDir Path to Events Folder
 * @prop {string} searchPattern Pattern for Files (look at the examples)
 */

/**
 * Command
 *
 * @typedef {Object} CommandStruct
 * @prop {string} name Command Name
 * @prop {string} [description] Command Description
 * @prop {string} [usage] Command Usage
 * @prop {string[]} [aliases] Command Aliases
 * @prop {number} [cooldown=0] Command Cooldown
 * @prop {boolean} [disabled=false] Load Command at the start
 * @prop {boolean} [ownerOnly=false] Command for Owners Only
 * @prop {PermissionString} [userPerms] Required Permissions for User
 * @prop {PermissionString} [botPerms] Required Permissions for Bot
 */

/**
 * Slash Command
 *
 * @typedef {Object} SlashCommandStruct
 * @prop {string} name Slash Command Name
 * @prop {string} description Slash Command Description
 * @prop {boolean} [disabled=false] Load command at the start
 * @prop {ApplicationCommandType} [type] Slash Command Type
 * @prop {ApplicationCommandOptionData[]} [options] Slash Command Options
 * @prop {boolean} [defaultPermission] Slash Command Default Permission
 */

/**
 * Event
 *
 * @typedef {Object} EventStruct
 * @prop {string} name Event Name
 * @prop {string} [emitter] Event Emitter
 */

/**
 * Shash Command Types
 *
 * * (1) CHAT_INPUT
 * * (2) USER
 * * (3) MESSAGE
 * @typedef {ApplicationCommandTypes} SlashCommandTypes
 */
