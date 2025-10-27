import rss, {pagesGlobToRssItems} from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog')
  return rss({
    title: 'phthallo',
    description: 'musings and rambles of a sleep-deprived teen',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-au</language>`,
  });
}