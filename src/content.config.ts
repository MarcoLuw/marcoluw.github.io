import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { parse } from 'yaml';

// A list of links kept in one YAML file. Each entry needs a title and a url;
// the build fails if either is missing. The entry's position in the file is
// used as its id, so the page can show links in the order they are written.
const linkList = (path: string) =>
	defineCollection({
		loader: file(path, {
			parser: (text) =>
				(parse(text) as Record<string, unknown>[]).map((entry, index) => ({
					...entry,
					id: String(index),
				})),
		}),
		schema: z.object({
			title: z.string().min(1),
			url: z.string().url(),
		}),
	});

export const collections = {
	practicing: linkList('src/data/practicing.yml'),
	building: linkList('src/data/building.yml'),
	sharing: linkList('src/data/sharing.yml'),
};
