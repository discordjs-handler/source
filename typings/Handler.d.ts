import { Client, Collection } from "discord.js";
import { SlashCommand } from "./SlashCommand";
import { Options } from "./Options";
import { Command } from "./Command";
import { Event } from "./Event";

export declare interface Handler {
  client: Client;
  options: Options;

  commands: Collection<string, Command>;
  slashCommands: Collection<string, SlashCommand>;
  events: Collection<string, Event>;
}

export declare class Handler {
  constructor(client: Client, options: Options);

  private init(): Promise<boolean>;

  public loadCommands(): Promise<boolean>;
  public loadSlashCommands(): Promise<boolean>;
  public loadEvents(): Promise<boolean>;

  private registerSlashCommands(): Promise<boolean | string>;
}
