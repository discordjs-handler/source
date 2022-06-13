import { PermissionString } from "discord.js";

export interface CommandStruct {
  name: string;
  description?: string;
  usage?: string;
  aliases?: string[];
  category?: string;

  cooldown?: number;
  disabled?: boolean;
  guildOnly?: boolean;
  dmOnly?: boolean;
  ownerOnly?: boolean;

  userPerms?: PermissionString[];
  botPerms?: PermissionString[];
}
