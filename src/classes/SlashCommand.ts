import {
  ApplicationCommandOptionData,
  ApplicationCommandType,
  Client,
  CommandInteraction,
} from "discord.js";
import { SlashCommandStruct } from "../interfaces/SlashCommand";

/**
 * Class that allows You to create command.
 *
 * @class
 * @classdesc Command Class
 */
export class SlashCommand implements SlashCommandStruct {
  public name: string;
  public description: string;
  public disabled?: boolean;
  public type?: ApplicationCommandType;
  public defaultPermission?: boolean;
  public options?: ApplicationCommandOptionData[];

  constructor(options: SlashCommandStruct) {
    /**
     * Slash Command Name
     * @type {string}
     */
    this.name = options.name;

    /**
     * Slash Command Description
     * @type {string}
     */
    this.description = options.description;

    /**
     * Load command at the start
     *
     * @type {boolean}
     * @default {false}
     */
    this.disabled = options?.disabled || false;

    /**
     * Slash Command Type
     *
     * @type {ApplicationCommandTypes}
     * @default {"CHAT_INPUT"}
     */
    this.type = options?.type || "CHAT_INPUT";

    /**
     * Slash Command Options
     *
     * @type {ApplicationCommandOptionData[]}
     * @default {[]}
     */
    this.options = options?.options || [];

    /**
     * Whether the command is enabled by default when the app is added to a guild
     *
     * @type {boolean}
     * @default {true}
     */
    this.defaultPermission = options?.defaultPermission || true;
  }

  /**
   * Run Method
   *
   * @param {Client} client Discord Client
   * @param {Message} message Discord Message
   * @param {string[]} args Arguments
   *
   * @returns {Promise<unknown> | unknown}
   */
  run(
    client: Client,
    interaction: CommandInteraction
  ): Promise<unknown> | unknown {
    throw new Error(
      `Method "run()" isn't used in "${this.name}" Slash Command!`
    );
  }
}
