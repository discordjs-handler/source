## Welcome

<strong>Welcome! This is "discordjs-handler" module!</strong> <br>
<strong>This is module that will simplify creating Command and Event Handlers for you Discord Bot!</strong>

## Installation

<strong>Please note: NodeJS v16.6 or above required for this module!</strong>

<code>$ npm i @badboy-discord/discordjs-handler</code>

## Features

<strong>[🙂] Easy to use.</strong> <br />
<strong>[👍] Beginner friendly.</strong> <br />
<strong>[🔑] TypeScript Support.</strong> <br />
<strong>[⚙️] 100% Promise-based</strong>

## Initialization

<strong>To initializate module, you need to write this code in bot main file.</strong> <br>
<strong>Or you can view our [examples folder](https://github.com/discordjs-handler/source/tree/stable/examples).</strong> <br>

```js
const { Client } = require('discord.js')
const { Handler } = require('discordjs-handler')

const client = new Client({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
})
const handler = new Handler({
    commandsDir: `${__dirname}/commands`,
    slashCommandsDir: `${__dirname}/slashCommands`,
    eventsDir: `${__dirname}/events`,

    searchPattern: '**/*{.js,.ts}',
})
```

## Links

<b>Authors: [badboy-discord](https://www.npmjs.com/~badboy-discord), [xyligan-gp](https://www.npmjs.com/~xyligan-gp)<br>
<b>Discord Tags: [goose#1046](https://discord.com/users/545956523571150858), [♡ xүℓ[ι]gαη4εg ♡#9457](https://discord.com/users/533347075463577640)<br>
<b>NodeJS: [Click](https://www.nodejs.org/)<br>
<b>TypeScript: [Click](https://www.typescriptlang.org)<br>
<b>Support Server: [Click](https://discord.gg/eGZfaWsZgR)<br>
<b>Website: [Click](https://discordjs-handler.js.org/)</b>
