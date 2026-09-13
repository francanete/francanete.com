// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import rehypePrettyCode from 'rehype-pretty-code';
import tailwindcss from '@tailwindcss/vite';

// Keep Gruvbox syntax colours that already meet 4.5:1; adjust only the faint tokens.
/** @type {Record<string, Record<string, string>>} */
const syntaxContrast = {
  '--shiki-dark': {
    '#458588': '#83a598',
    '#928374': '#a89984',
    '#cc241d': '#fb6452',
    '#b16286': '#d3869b',
    '#fb4934': '#fb6452',
    '#d65d0e': '#fe8019',
  },
  '--shiki-light': {
    '#458588': '#076678',
    '#928374': '#665c54',
    '#427b58': '#3c6e4f',
    '#b57614': '#966315',
    '#b16286': '#8f3f71',
    '#79740e': '#67621a',
    '#689d6a': '#3c6e4f',
    '#d79921': '#966315',
    '#7c6f64': '#665c54',
    '#d65d0e': '#af3a03',
    '#98971a': '#67621a',
  },
};

export default defineConfig({
  site: 'https://www.francanete.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [rehypePrettyCode, {
        theme: { dark: 'gruvbox-dark-medium', light: 'gruvbox-light-hard' },
        transformers: [{
          /** @param {import('shiki').ThemedToken[][]} lines */
          tokens(lines) {
            for (const line of lines) {
              for (const token of line) {
                const style = token.htmlStyle;
                if (!style) continue;
                for (const [property, replacements] of Object.entries(syntaxContrast)) {
                  const replacement = replacements[style[property]?.toLowerCase()];
                  if (replacement) style[property] = replacement;
                }
              }
            }
          },
        }],
      }],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['omarchy-home.tailcb326a.ts.net'],
    },
  },
  output: 'static',
  adapter: vercel(),
});
