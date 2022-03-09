/**
 * Module Options
 *
 * @typedef {Object} Options
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
 * @prop {string[]} [aliases] Command Aliases
 * @prop {string} [usage] Command Usage
 * @prop {boolean} [ownerOnly] Command for Owners Only
 * @prop {PermissionString} [userPerms] Required Permissions for User
 * @prop {PermissionString} [botPerms] Required Permissions for Bot
 */

/**
 * Slash Command
 *
 * @typedef {Object} SlashCommandStruct
 * @prop {string} name Slash Command Name
 * @prop {string} description Slash Command Description
 * @prop {ApplicationCommandType} [type] Slash Command Type
 * @prop {ApplicationCommandOptionData[]} [options] Slash Command Options
 * @prop {boolean} [options] Slash Command Default Permission
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
 * * CHAT_INPUT
 * * USER
 * * MESSAGE
 * @typedef {"CHAT_INPUT" | "USER" | "MESSAGE"} SlashCommandTypes
 */
