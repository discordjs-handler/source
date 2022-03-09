import { PermissionString } from "discord.js";

export interface CommandStruct {
  name: string;
  description?: string;
  aliases?: string[];
  usage?: string;
  ownerOnly?: boolean;
  userPerms?: PermissionString[];
  botPerms?: PermissionString[];
}
