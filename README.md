# site-v1
![780shots_so](https://github.com/user-attachments/assets/62a3a78b-6546-40f8-90d5-be125bf547b9)

Personal site/portfolio/blog, built with [Astro](https://astro.build/) and [Tailwind](https://tailwindcss.com/) ft. two themes and a responsive, mobile-friendly design. It's fully static and optimised to a few hundred kilobytes.


## Development

1. Clone the source code to your device
```sh
git clone https://github.com/phthallo/site-v1 && cd site-v1
```

2. Install the project's dependencies
```sh
bun install
```

3. Start the development server on `localhost:4321`
```sh
bun run dev
```

4. Build the site to `/dist`
```sh
bun run build
```


### Notes
- Blog posts are `.mdx` files and are located in `/src/posts/`. Draft blog posts can be included in `/src/posts/drafts` and will be gitignored.
- Images are stored in `src/assets`, which allows Astro to optimise them when building.
