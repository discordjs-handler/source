import { Client, Message } from "discord.js";
import { Command } from "../../../src/classes/Command";

export default class TestCommand extends Command {
  constructor() {
    super({
      name: "test",
      description: "This is test command!",
    });
  }

  run(client: Client, message: Message, args: string[]) {
    return message.channel.send("Hello, world!");
  }
}
