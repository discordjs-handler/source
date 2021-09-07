import { Client } from 'discord.js'
import { EventEmitter } from 'events'
import { Handler } from '..'

export interface Event {
    name: string
    run: EventRun
    emitter?: EventEmitter
}

export interface EventRun {
    (client: Client, handler: Handler, ...param): Promise<unknown>
}
