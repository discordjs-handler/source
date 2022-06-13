import { ApplicationCommandTypes } from "discord.js/typings/enums";

/**
 * Module Options
 *
 * @typedef {Object} Options
 * @prop {boolean} [debug=false] Debug Mode
 * @prop {string} commandsDir Path to Commands Folder
 * @prop {string} slashCommandsDir Path to Slash Commands Folder
 * @prop {string} eventsDir Path to Events Folder
 * @prop {string} searchPattern Pattern for Files (look at the examples)
 */

/**
 * Command
 *
 * @typedef {Object} CommandStruct
 * @prop {string} name Command Name
 * @prop {string} [description] Command Description
 * @prop {string} [usage] Command Usage
 * @prop {string[]} [aliases] Command Aliases
 * @prop {number} [cooldown=0] Command Cooldown
 * @prop {boolean} [disabled=false] Load Command at the start
 * @prop {boolean} [ownerOnly=false] Command for Owners Only
 * @prop {PermissionString} [userPerms] Required Permissions for User
 * @prop {PermissionString} [botPerms] Required Permissions for Bot
 */

/**
 * Slash Command
 *
 * @typedef {Object} SlashCommandStruct
 * @prop {string} name Slash Command Name
 * @prop {string} description Slash Command Description
 * @prop {boolean} [disabled=false] Load command at the start
 * @prop {ApplicationCommandType} [type] Slash Command Type
 * @prop {ApplicationCommandOptionData[]} [options] Slash Command Options
 * @prop {boolean} [defaultPermission] Slash Command Default Permission
 */

/**
 * Event
 *
 * @typedef {Object} EventStruct
 * @prop {string} name Event Name
 * @prop {string} [emitter] Event Emitter
 */

/**
 * Shash Command Types
 *
 * * (1) CHAT_INPUT
 * * (2) USER
 * * (3) MESSAGE
 * @typedef {ApplicationCommandTypes} SlashCommandTypes
 */
