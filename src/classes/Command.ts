import { Client, Message, PermissionString } from "discord.js";
import { CommandStruct } from "../interfaces/Command";

/**
 * Class that allows You to create command.
 *
 * @class
 * @classdesc Command Class
 */
export class Command implements CommandStruct {
  public name: string;
  public description?: string;
  public usage?: string;
  public aliases?: string[];
  public category?: string;

  public cooldown?: number;
  public disabled?: boolean;
  public guildOnly?: boolean;
  public dmOnly?: boolean;
  public ownerOnly?: boolean;

  public userPerms?: PermissionString[];
  public botPerms?: PermissionString[];

  constructor(options: CommandStruct) {
    /**
     * Command Name
     * @type {string}
     */
    this.name = options.name;

    /**
     * Command Description
     *
     * @type {string}
     * @default {"None"}
     */
    this.description = options?.description || "None";

    /**
     * Command Usage
     *
     * @type {string}
     * @default {"None"}
     */
    this.usage = options?.usage || "None";

    /**
     * Command Aliases
     *
     * @type {string[]}
     * @default {[]}
     */
    this.aliases = options?.aliases || [];

    /**
     * Command Category
     *
     * @type {string}
     * @default {"Miscellaneous"}
     */
    this.category = options?.category || "Miscellaneous";

    /**
     * Command Cooldown
     *
     * @type {number}
     * @default {0}
     */
    this.cooldown = options?.cooldown || 0;

    /**
     * Load Command at the start
     *
     * @type {boolean}
     * @default {false}
     */
    this.disabled = options?.disabled || false;

    /**
     * Can Command be used only in Guilds
     *
     * @type {boolean}
     * @default {true}
     */
    this.guildOnly = options?.guildOnly || true;

    /**
     * Can Command be used only in DMs
     *
     * @type {boolean}
     * @default {false}
     */
    this.dmOnly = options?.dmOnly || false;

    /**
     * For Owner or not
     *
     * @type {boolean}
     * @default {false}
     */
    this.ownerOnly = options?.ownerOnly || false;

    /**
     * Required User Permissions
     *
     * @type {PermissionString[]}
     * @default {[]}
     */
    this.userPerms = options?.userPerms || [];

    /**
     * Required Bot Permissions
     *
     * @type {PermissionString[]}
     * @default {[]}
     */
    this.botPerms = options?.botPerms || [];
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
  public run(
    client: Client,
    message: Message,
    args: string[]
  ): Promise<unknown> | unknown {
    throw new Error(
      `[DJS-Handler] Method "run()" isn't used in "${this.name}" Command!`
    );
  }
}
