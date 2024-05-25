import { imageMetadata } from 'astro/assets/utils';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema:({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		draft: z.boolean(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.object({
				src: image().refine((img) => img.height = 360).refine((img) => img.width = 640),
				alt: z.string(),
			  }),
		thumbnail:image().refine((img) => img.height = 150).refine((img) => img.width = 150),
		categories: z.string().optional(),
		tags: z.array(z.string()).optional(),
		author: z.string(),
	}),
});

/* const authors = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		id: z.string(),
		alt: z.string().optional(),
		heroImage: z.string().optional(),
	}),
}); */

export const collections = { blog };