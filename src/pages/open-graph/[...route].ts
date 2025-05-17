import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = OGImageRoute({
  // Tell us the name of your dynamic route segment.
  // In this case it’s `route`, because the file is named `[...route].ts`.
  param: 'route',

  // Pass the glob result to pages
  pages: await import.meta.glob('/src/pages/blog/*.mdx', { eager: true }),

  // Extract `title` and `description` from the glob result’s `frontmatter` property
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