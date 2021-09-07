import { Client } from "discord.js";
import { Handler } from "../src";

const client = new Client({
    intents: ['GUILDS', 'GUILD_MESSAGES']
});
const handler = new Handler(client, {
    commandsDir: `${__dirname}/commands/`,
    eventsDir: `${__dirname}/events`,
    slashCommandsDir: `${__dirname}/slashCommands`,
    searchPattern: '/**/*.ts'
});

client.login("super-duper-token");

(async () => {
    await handler.loadCommands();
    await handler.loadEvents();
    await handler.loadSlashCommands();
})();