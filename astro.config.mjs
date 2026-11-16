// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

/**
 * In `astro dev`, lets the browser keep the fonts rather than check them
 * again on every page: the dev server answers `no-cache`, and the check made
 * Safari show each page with its text missing for a moment while it waited
 * for Inter (fonts.css is `font-display: optional`). The files under
 * node_modules do not change while the server runs. Not used by the build.
 *
 * @returns {import('vite').Plugin}
 */
function cacheFontsInDev() {
  const cacheControl = 'public, max-age=31536000, immutable';
  return {
    name: 'cache-fonts-in-dev',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (/\.woff2(\?|$)/.test(req.url ?? '')) {
          const setHeader = res.setHeader.bind(res);
          /** @type {typeof res.setHeader} */
          res.setHeader = (name, value) =>
            setHeader(name, name.toLowerCase() === 'cache-control' ? cacheControl : value);
          setHeader('Cache-Control', cacheControl);
        }
        next();
      });
    },
  };
}

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
    plugins: [tailwindcss(), cacheFontsInDev()],
  },
});
