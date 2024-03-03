import { Level } from './Level';

export type Challenge = {
	title: string;
	description: string;
	image?: string;
	level: Level;
	tags: string[];
	route?: string;
};
