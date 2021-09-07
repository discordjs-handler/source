import { EventRun } from '../../../src';

export const name: string = 'ready';

export const run: EventRun = async (client) => {
    console.log(`${client.user.tag} started!`);
}