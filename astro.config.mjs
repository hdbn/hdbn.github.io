// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // A user site (<user>.github.io) is served from the root, so there is no `base`.
  site: 'https://hdbn.github.io',
  // English at the root, Japanese under /ja/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    icon(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', ja: 'ja' } },
      filter: (page) => !/\/404\/?$/.test(page),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
