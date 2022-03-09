import { Client } from "discord.js";
import { Handler } from "../../../src";
import { Event } from "../../../src/classes/Event";

export default class ReadyEvent extends Event {
  constructor() {
    super({
      name: "ready",
    });
  }

  run(client: Client, handler: Handler) {
    console.log('Bot "%s" started!', client.user.tag);
  }
}
