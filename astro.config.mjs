import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  site: 'https://phthallo.com/',
  output: "static",
  integrations: [tailwind({applyBaseStyles:true}), sitemap({
          filter: page => page !== 'https://phthallo.com/404'
      }), mdx(), pagefind()]
});