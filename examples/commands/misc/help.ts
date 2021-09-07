import { CommandRun } from '../../../src';

export const name: string = 'help';

export const run: CommandRun = async(client, message, args) => {
    message.channel.send('**help** command runned!');
}