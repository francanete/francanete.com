import { getCollection } from 'astro:content';

export const getLiveNotes = async () => {
  const notes = await getCollection('notes');
  return notes
    .filter((note) => note.data.status === 'live')
    .sort((a, b) => (a.data.order ?? 0) - (b.data.order ?? 0));
};
