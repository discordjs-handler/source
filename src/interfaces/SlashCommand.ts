import {
  ApplicationCommandOptionData,
  ApplicationCommandType,
} from "discord.js";

export interface SlashCommandStruct {
  name: string;
  description: string;
  type?: ApplicationCommandType;
  options?: ApplicationCommandOptionData[];
  defaultPermission?: boolean;
}

export type SlashCommandTypes = ApplicationCommandType;
