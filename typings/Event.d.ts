import { EventStruct } from "../src/interfaces/Event";
import { Handler } from "../src/classes/Handler";
import { Client } from "discord.js";

export declare interface Event {
  name: string;
  emitter?: string;
}

export declare abstract class Event implements EventStruct {
  constructor(options: EventStruct);

  /**
   * Run Method
   *
   * @abstract
   * @param {Client} client Discord Client
   * @param {Handler} handler Handler
   * @param {any[]} params Parameters
   *
   * @returns {any}
   */
  abstract run(client: Client, handler: Handler, ...params: any[]): any;
}
