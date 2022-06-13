import {
  ApplicationCommandOptionData,
  ApplicationCommandType,
} from "discord.js";

export interface SlashCommandStruct {
  name: string;
  description: string;
  disabled?: boolean;
  type?: ApplicationCommandType;
  options?: ApplicationCommandOptionData[];
  defaultPermission?: boolean;
}

export type SlashCommandTypes = ApplicationCommandType;
