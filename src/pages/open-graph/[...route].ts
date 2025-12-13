import { OGImageRoute } from 'astro-og-canvas';
import { getCollection } from 'astro:content';

export const prerender = true

const blog = await getCollection("blog")

const pages = Object.fromEntries(blog.map(({ id, data }) => [id, data]));

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: pages,
  getImageOptions: (path, page) => ({
    title: page.title,
    description: page.description,
    logo: { path: 'public/favicon.ico' },
    bgGradient: [[19, 15, 25]],
    font: { title: { families: [ "monospace" ] }, description: { families: [ "monospace" ] } }, 
  }),
});