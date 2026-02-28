// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rosemaryberkon-maker.github.io',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you/') && !page.includes('/brand/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});