export interface Options {
  debug?: boolean;
  owners?: string[];

  commandsDir: string;
  slashCommandsDir: string;
  eventsDir: string;

  searchPattern: string;
}
