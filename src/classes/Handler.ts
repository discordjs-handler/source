import { ApplicationCommandData, Client, Collection } from "discord.js";
import { Options } from "../interfaces/Options";
import { Command } from "./Command";
import { Event } from "./Event";
import { SlashCommand } from "./SlashCommand";

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

    this.init();

    this.client.on("ready", async () => {
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

      commandFiles.forEach(async (val) => {
        const command: Command = new (await (await import(val)).default)();
        this.commands.set(command.name, command);

        console.log(`[DJS-Handler] Command "${command.name}" loaded!`);
      });

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

      commandFiles.forEach(async (val) => {
        const command: SlashCommand = new (await (await import(val)).default)();
        this.slashCommands.set(command.name, command);

        console.log(`[DJS-Handler] Slash Command "${command.name}" loaded!`);
      });

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

      eventFiles.forEach(async (val) => {
        const event: Event = new (await (await import(val)).default)();
        this.events.set(event.name, event);

        (this.client[event.emitter] || this.client).on(event.name, (...args) =>
          event.run(this.client, this, ...args)
        );

        console.log(`[DJS-Handler] Event "${event.name}" loaded!`);
      });

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
