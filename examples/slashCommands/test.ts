import { SlashRun } from '../../src/interfaces/SlashCommand';

export const name: string = 'test';
export const description: string = 'Test Command';

export const run: SlashRun = async(client, interaction) => {
    return interaction.reply({
        content: '**test** slash command runned!'
    });
}