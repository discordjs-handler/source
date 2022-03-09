import { Client, CommandInteraction } from "discord.js";
import { SlashCommand } from "../../src/classes/SlashCommand";

export default class TestSlashCommand extends SlashCommand {
  constructor() {
    super({
      name: "test",
      description: "This is test command!",
    });
  }

  run(client: Client, interaction: CommandInteraction) {
    return interaction.reply({
      content: '**Slash Command "test" is working!**',
    });
  }
}
