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
  public description: string;
  public aliases?: string[];
  public ownerOnly?: boolean;
  public usage?: string;
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
     * @type {string}
     */
    this.description = options.description;

    /**
     * Command Aliases
     *
     * @type {string[]}
     * @default []
     */
    this.aliases = options?.aliases;

    /**
     * For Owner or not
     *
     * @type {boolean}
     * @default false
     */
    this.ownerOnly = options?.ownerOnly;

    /**
     * Required User Permissions
     *
     * @type {PermissionString[]}
     * @default []
     */
    this.userPerms = options?.userPerms;

    /**
     * Required Bot Permissions
     *
     * @type {PermissionString[]}
     * @default []
     */
    this.botPerms = options?.botPerms;
  }

  /**
   * Run Method
   *
   * @abstract
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
    throw new Error(`Method "run()" isn't used in "${this.name}" Command!`);
  }
}
