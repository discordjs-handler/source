import { Client, Message, PermissionString } from "discord.js";
import { CommandStruct } from "../src/interfaces/Command";

export declare interface Command {
  name: string;
  description: string;
  usage?: string;
  aliases?: string[];
  cooldown?: number;
  disabled?: boolean;
  ownerOnly?: boolean;
  userPerms?: PermissionString[];
  botPerms?: PermissionString[];
}

export declare abstract class Command implements CommandStruct {
  constructor(options: CommandStruct);

  /**
   * Run Method
   *
   * @abstract
   * @param {Client} client Discord Client
   * @param {Message} message Discord Message
   * @param {string[]} args Arguments
   *
   * @returns {any}
   */
  abstract run(client: Client, message: Message, args: string[]): any;
}
