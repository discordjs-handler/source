import { Client } from "discord.js";
import { Handler } from "../src";

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

new Handler(client, {
  commandsDir: `./commands`,
  eventsDir: `./events`,
  slashCommandsDir: `./slashCommands`,
  searchPattern: "/**/*.ts",
});

client.login("super-duper-token");
