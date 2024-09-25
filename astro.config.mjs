import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://phthallo.com/',
  //output: "server",
  integrations: [
    tailwind({applyBaseStyles:false}),
    sitemap({
			filter: page => page !== 'https://phthallo.com/404'
		})]
});