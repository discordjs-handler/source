export * from './classes/Handler';
export * from '../src/interfaces/Command'
export * from '../src/interfaces/Event'
export * from '../src/interfaces/SlashCommand';

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
 * @typedef {Object} Command
 * @prop {string} name Command Name
 * @prop {string} [description] Command Description
 * @prop {string[]} [aliases] Command Aliases
 * @prop {string} [usage] Command Usage
 * @prop {boolean} [ownerOnly] Command for Owners Only
 * @prop {Permissions} [userPerms] Required Permissions for User
 * @prop {Permissions} [userPerms] Required Permissions for Bot
 * @prop {Function} [run] Command Run Function
 */

/**
 * Slash Command
 * 
 * @typedef {Object} SlashCommand
 * @prop {string} name Slash Command Name
 * @prop {string} description Slash Command Description
 * @prop {ApplicationCommandType} [type] Slash Command Type
 * @prop {ApplicationCommandOption[]} [options] Slash Command Options
 * @prop {boolean} [options] Slash Command Default Permission
 * @prop {Function} run Slash Command Run Function
 */

/**
 * Event
 * 
 * @typedef {Object} Event
 * @prop {string} name Event Name
 * @prop {Function} run Event Run Function
 * @prop {EventEmitter} [emitter] Event Emitter
 */