import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [mdx(), tailwind()],
  collections: {
    tutorials: {
      schema: {
        type: 'content',
        title: 'string',
        description: 'string',
        order: 'number'
      }
    },
    tasks: {
      schema: {
        type: 'content',
        title: 'string',
        tutorialId: 'string',
        order: 'number'
      }
    }
  }
});