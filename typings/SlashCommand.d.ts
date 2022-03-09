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
  type?: ApplicationCommandType;
  defaultPermission?: boolean;
  options?: ApplicationCommandOptionData[];
}

export declare abstract class SlashCommand implements SlashCommandStruct {
  constructor(options: SlashCommandStruct);

  abstract run(
    client: Client,
    interaction: CommandInteraction
  ): Promise<unknown> | unknown;
}
