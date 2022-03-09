import { Client, Message } from "discord.js";
import { Handler } from "../../../src";
import { Event } from "../../../src/classes/Event";

export default class MessageCreateEvent extends Event {
  constructor() {
    super({
      name: "messageCreate",
    });
  }

  run(client: Client, handler: Handler, message: Message) {
    const prefix = "!";

    if (message.author.bot || !message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();

    const command = handler.commands.get(cmd);
    if (!command) return message.channel.send("command not found!");

    return command.run(client, message, args);
  }
}
