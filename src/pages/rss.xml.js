import rss, {pagesGlobToRssItems} from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  return rss({
    title: 'phthallo',
    description: 'musings and rambles of a sleep-deprived teen',
    site: context.site,
    items: await pagesGlobToRssItems(
        await getCollection("blog")
    ),
    customData: `<language>en-au</language>`,
  });
}