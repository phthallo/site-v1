import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',

  pages: await import.meta.glob('/src/pages/blog/*.mdx', { eager: true }),

  getImageOptions: (path, page) => ({
    title: page.frontmatter.title,
    description: page.frontmatter.description,
    logo: { path: 'public/favicon.ico' },
    bgGradient: [[19, 15, 25]],
    font: { title: { families: [ "0xProto", "monospace" ] }, description: { families: [ "0xProto", "monospace" ] } }, 
    fonts: ["public/fonts/0xProto/0xProtoNerdFont-Regular.ttf"]
  }),

  // ...
});