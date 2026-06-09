import { getCollection } from 'astro:content';

export const getLiveNotes = async () => {
  const notes = await getCollection('notes');
  return notes
    .filter((note) => note.data.status === 'live')
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
};

export const readingTimeMinutes = (body: string | undefined) => {
  const words = (body ?? '')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
};
