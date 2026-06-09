import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getLiveNotes } from '../lib/content/notes';

export async function GET(context: APIContext) {
  const notes = await getLiveNotes();
  return rss({
    title: 'Fran Canete — Notes',
    description:
      'Notes on building software with coding agents, Claude Code, and practical AI-assisted development workflows.',
    site: context.site!,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      link: `/notes/${note.id}`,
      pubDate: note.data.publishedAt,
    })),
  });
}
