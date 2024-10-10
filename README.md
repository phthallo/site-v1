# site-v1
![image](https://cloud-7r4mkflwh-hack-club-bot.vercel.app/0image.png)

Personal site/portfolio/blog, built with [Astro](https://astro.build/) and [Tailwind](https://tailwindcss.com/), and hosted on [Nest](https://hackclub.app/)! ft. two themes and a responsive, mobile-friendly design.


## Development

1. Clone the source code to your device
```sh
git clone https://github.com/phthallo/site-v1
```

2. Install the project's dependencies
```sh
npm install
```

3. Start the development server on `localhost:4321`
```sh
npm run dev
```

4. Build the static site to `/dist`
```sh
npm run build
```

The final website is **static**, and as such, it can be built and deployed on any static site hosting service, such as GitHub Pages. This repository contains the full source code.

### Notes
- Blog posts are `.mdx` files and are located in `/src/pages/blog`.
- Project data is stored in `src/data/projects.json`.
- Images are stored in `src/assets`, which allows Astro to optimise them when building.
