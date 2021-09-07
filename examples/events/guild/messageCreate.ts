import { Message } from 'discord.js';
import { EventRun } from '../../../src/interfaces/Event';

export const name: string = 'messageCreate';
export const run: EventRun = async(client, handler, message: Message) => {
    const prefix = "!";

    if(message.author.bot || !message.guild) return;
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const cmd = args.shift().toLowerCase();

    const command = handler.commands.get(cmd);
    if(!command) return message.channel.send('command not found!');

    return command.run(client, message, args);
}