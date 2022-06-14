import {
  ApplicationCommandOptionData,
  ApplicationCommandType,
  Client,
  CommandInteraction,
} from "discord.js";
import { SlashCommandStruct } from "../src/interfaces/SlashCommand";

export declare interface SlashCommand {
  name: string;
  description: string;
  disabled?: boolean;
  type?: ApplicationCommandType;
  defaultPermission?: boolean;
  options?: ApplicationCommandOptionData[];
}

export declare abstract class SlashCommand implements SlashCommandStruct {
  constructor(options: SlashCommandStruct);

  /**
   * Run Method
   *
   * @abstract
   * @param {Client} client Discord Client
   * @param {CommandInteraction} interaction Command Interaction
   *
   * @returns {Promise<unknown> | unknown}
   */
  abstract run(
    client: Client,
    interaction: CommandInteraction
  ): Promise<unknown> | unknown;
}
