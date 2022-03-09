import { Client, Message, PermissionString } from "discord.js";
import { CommandStruct } from "../src/interfaces/Command";

export declare interface Command {
  name: string;
  description: string;
  aliases?: string[];
  ownerOnly?: boolean;
  usage?: string;
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
   * @returns {Promise<unknown> | unknown}
   */
  abstract run(
    client: Client,
    message: Message,
    args: string[]
  ): Promise<unknown> | unknown;
}
