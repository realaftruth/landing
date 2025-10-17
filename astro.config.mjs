// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://realaftruth.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  // START: Fix voor Rollup fout met astro-navbar
  build: {
    rollupOptions: {
      external: [
        // Dwingt Rollup om dit pakket niet te bundelen, wat de 'failed to resolve' fout omzeilt.
        '@surjithctly/astro-navbar'
      ],
    },
  },
  // EINDE: Fix voor Rollup fout met astro-navbar

  integrations: [mdx()],
  adapter: netlify()
});
