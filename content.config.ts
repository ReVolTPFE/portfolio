import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		projects: defineCollection({
			type: 'page',
			source: 'projects/*.md',
			schema: z.object({
				slug: z.string(),
				title: z.string(),
				description: z.string(),
				companyProject: z.string(),
				company: z.string(),
				date: z.string(),
				pending: z.boolean().default(false),
				trending: z.boolean().default(false),
				image: z.string(),
				demoLink: z.string().default(''),
				images: z.array(z.object({
					src: z.string(),
					alt: z.string(),
				})).default([]),
				technologies: z.array(z.object({
					icon: z.string(),
					text: z.string(),
				})).default([]),
				actors: z.object({
					client: z.string(),
					developer: z.string(),
					projectManager: z.string(),
				}).optional(),
				tags: z.array(z.string()).default([]),
				skillLinks: z.array(z.object({
					link: z.string(),
					text: z.string(),
				})).default([]),
			}),
		}),
		skills: defineCollection({
			type: 'page',
			source: 'skills/*.md',
			schema: z.object({
				slug: z.string(),
				name: z.string(),
				image: z.string(),
				isIcon: z.boolean().default(false),
				category: z.string(),
				order: z.number().default(0),
				relatedProjects: z.array(z.string()).default([]),
			}),
		}),
	},
});
