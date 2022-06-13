import { PermissionString } from "discord.js";

export interface CommandStruct {
  name: string;
  description?: string;
  usage?: string;
  aliases?: string[];
  cooldown?: number;
  disabled?: boolean;
  ownerOnly?: boolean;
  userPerms?: PermissionString[];
  botPerms?: PermissionString[];
}
