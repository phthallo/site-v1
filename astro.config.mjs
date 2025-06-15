import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  
  site: 'https://phthallo.com/',
  output: "hybrid",
  adapter: node({mode: "standalone"}),
  integrations: [tailwind({applyBaseStyles:true}), sitemap({
          filter: page => page !== 'https://phthallo.com/404'
      }), mdx()]
});