// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import rehypePrettyCode from 'rehype-pretty-code';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.francanete.com',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [rehypePrettyCode, { theme: { dark: 'github-dark-dimmed', light: 'github-light' } }],
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
