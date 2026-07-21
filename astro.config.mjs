// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site vitrine SEM School — statique, français, sans framework JS.
export default defineConfig({
  site: 'https://www.sem-school.com',
  integrations: [sitemap()],
});
