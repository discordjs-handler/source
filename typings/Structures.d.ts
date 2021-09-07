import { ApplicationCommandOption, ApplicationCommandType, Client, CommandInteraction, Message, PermissionString } from "discord.js";
import { EventEmitter } from 'events';
import Handler from "./Handler";

// Command Structure
export interface Command {
    name: string;
    description?: string;
    aliases?: string[];
    usage?: string;
    ownerOnly?: boolean;
    userPerms?: PermissionString[];
    botPerms?: PermissionString[];

    run?: CommandRun;
}

export interface CommandRun {
    (client: Client, message: Message, args: string[]): Promise<unknown> | unknown;
}

// Event Structure
export interface Event {
    name: string;
    run: EventRun;
    emitter?: EventEmitter;
}

export interface EventRun {
    (client: Client, handler: Handler, ...param): Promise<unknown>;
}

// Slash Command Structure
export interface SlashCommand {
    name: string;
    description: string;
    type?: ApplicationCommandType;
    options?: ApplicationCommandOption[];
    defaultPermission?: boolean;

    run?: SlashRun;
}

export interface SlashRun {
    (client: Client, interaction: CommandInteraction): Promise<unknown> | unknown;
}