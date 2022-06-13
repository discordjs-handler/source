import { Client } from "discord.js";
import { Handler } from "../index";

export interface EventStruct {
  name: string;
  emitter?: string;
}
