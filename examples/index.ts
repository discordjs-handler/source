import { Client } from "discord.js";
import { Handler } from "../src";

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});
const handler = new Handler(client, {
  commandsDir: `${__dirname}/commands/`,
  eventsDir: `${__dirname}/events`,
  slashCommandsDir: `${__dirname}/slashCommands`,
  searchPattern: "/**/*.ts",
});

client.login("ODg5ODMwODE5ODYwOTc5NzEy.YUm9hw.rhiKSq4IatlJpfnGW3uMa6XfwSA");
