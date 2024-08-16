import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

const LIVE_URL = 'https://minislel.github.io'
// https://astro.build/config
export default defineConfig({
  site: 'https://minislel.github.io',
  integrations: [tailwind()]
});