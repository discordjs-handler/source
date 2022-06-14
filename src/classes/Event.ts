import { Client } from "discord.js";
import { EventStruct } from "../interfaces/Event";
import { Handler } from "./Handler";

/**
 * Class that allows You to create event.
 *
 * @class
 * @classdesc Event Class
 */
export class Event implements EventStruct {
  public name: string;
  public emitter?: string;

  constructor(options: EventStruct) {
    /**
     * Event Name
     * @type {string}
     */
    this.name = options.name;

    /**
     * Event Emitter
     * @type {string}
     */
    this.emitter = options?.emitter;
  }

  /**
   * Run Method
   *
   * @param {Client} client Discord Client
   * @param {Handler} handler Handler
   * @param {any[]} params Parameters
   *
   * @returns {Promise<unknown> | unknown}
   */
  public run(
    client: Client,
    handler: Handler,
    ...params: any[]
  ): Promise<unknown> | unknown {
    throw new Error(`Method "run()" isn't used in "${this.name}" Event!`);
  }
}
