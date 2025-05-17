import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'phthallo',
    description: 'musings and rambles of a sleep-deprived teen',
    site: context.site,
    items: await pagesGlobToRssItems(
        import.meta.glob("../blog/*.mdx")
    ),
    customData: `<language>en-au</language>`,
  });
}