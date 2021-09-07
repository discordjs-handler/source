import { Client, Collection } from "discord.js";
import { Options } from "./Options";
import { Command, SlashCommand } from "./Structures";

export = Handler;

declare class Handler {
    public client: Client;
    public options: Options;

    public commands: Collection<string, Command>;
    public slashCommands: Collection<string, SlashCommand>;
    public events: Collection<string, Event>;

    constructor(client: Client, options: Options);

    public loadCommands(): Promise<boolean>;
    public loadSlashCommands(): Promise<boolean>;
    public loadEvents(): Promise<boolean>;

    private registerSlashCommands(): Promise<boolean | string>;
}