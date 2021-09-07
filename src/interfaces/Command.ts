import { Client, Message, Permissions } from 'discord.js'

export interface Command {
    name: string
    description?: string
    aliases?: string[]
    usage?: string
    ownerOnly?: boolean
    userPerms?: Permissions
    botPerms?: Permissions

    run?: CommandRun
}

export interface CommandRun {
    (client: Client, message: Message, args: string[]):
        | Promise<unknown>
        | unknown
}
