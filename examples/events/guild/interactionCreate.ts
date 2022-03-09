import { Client, Interaction } from "discord.js";
import { Handler } from "../../../src";
import { Event } from "../../../src/classes/Event";

export default class InteractionCreateEvent extends Event {
  constructor() {
    super({
      name: "interactionCreate",
    });
  }

  run(client: Client, handler: Handler, interaction: Interaction) {
    if (!interaction.isCommand()) return;

    const cmd = handler.slashCommands.get(interaction.commandName);
    if (!cmd) return;

    return cmd.run(client, interaction);
  }
}
