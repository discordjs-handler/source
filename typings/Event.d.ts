import { Client } from "discord.js";
import { EventStruct } from "../src/interfaces/Event";
import { Handler } from "../src/classes/Handler";

export declare interface Event {
  name: string;
  emitter?: string;
}

export declare abstract class Event implements EventStruct {
  constructor(options: EventStruct);

  abstract run(
    client: Client,
    handler: Handler,
    ...params: any[]
  ): Promise<unknown> | unknown;
}
