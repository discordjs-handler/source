import {
    ApplicationCommandOption,
    ApplicationCommandType,
    Client,
    CommandInteraction,
} from 'discord.js'

export interface SlashCommand {
    name: string
    description: string
    type?: ApplicationCommandType
    options?: ApplicationCommandOption[]
    defaultPermission?: boolean

    run?: SlashRun
}

export interface SlashRun {
    (client: Client, interaction: CommandInteraction):
        | Promise<unknown>
        | unknown
}
