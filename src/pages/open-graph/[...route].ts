import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

export const prerender = true

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: await getCollection("blog"),
  getImageOptions: (path, page) => ({
    title: page.data.title,
    description: page.data.description,
    logo: { path: 'public/favicon.ico' },
    bgGradient: [[19, 15, 25]],
    font: { title: { families: [ "0xProto", "monospace" ] }, description: { families: [ "0xProto", "monospace" ] } }, 
    fonts: ["public/fonts/0xProto/0xProtoNerdFont-Regular.ttf"]
  }),
});