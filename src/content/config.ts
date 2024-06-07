/* import { imageMetadata } from 'astro/assets/utils'; */
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
			.optional(),
		updatedTime: z.coerce.string().date().optional(),
		heroImage: z.object({
				src: image().refine((img) => img.height = 2160).refine((img) => img.width = 3000),
				alt: z.string(),
			  }),
		categories: z.string().optional(),
		tags: z.array(z.string()).optional(),
		author: z.string(),
		feature: z.boolean().optional(),
		relatedOne: z.object({
			title: z.string(),
			src: z.string(),
		  }).optional(),
		  relatedTwo: z.object({
			title: z.string(),
			src: z.string(),
		  }).optional(),
		  relatedThree: z.object({
			title: z.string(),
			src: z.string(),
		  }).optional(),
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