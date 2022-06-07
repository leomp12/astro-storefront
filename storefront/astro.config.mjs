import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  adapter: node(),
  integrations: [vue(), tailwind(), partytown(), sitemap()],
});
