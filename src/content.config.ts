import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/notes' }),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      status: z.enum(['live', 'drafting']),
      order: z.number().optional(),
      publishedAt: z.date().optional(),
      updatedAt: z.date().optional(),
    })
    .superRefine((note, context) => {
      if (!note.publishedAt) {
        if (note.status === 'live' || note.updatedAt) {
          context.addIssue({
            code: 'custom',
            path: ['publishedAt'],
            message:
              note.status === 'live'
                ? 'Live notes must include a publication date.'
                : 'A publication date is required when an update date is set.',
          });
        }
        return;
      }

      if (note.updatedAt && note.updatedAt.getTime() < note.publishedAt.getTime()) {
        context.addIssue({
          code: 'custom',
          path: ['updatedAt'],
          message: 'The update date cannot be earlier than the publication date.',
        });
      }
    }),
});

export const collections = { notes };
