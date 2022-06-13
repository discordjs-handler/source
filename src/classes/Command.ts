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
  public cooldown?: number;
  public disabled?: boolean;
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
   * @returns {any}
   */
  public run(client: Client, message: Message, args: string[]): any {
    throw new Error(
      `[DJS-Handler] Method "run()" isn't used in "${this.name}" Command!`
    );
  }
}
