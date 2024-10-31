# site-v1
![780shots_so](https://github.com/user-attachments/assets/62a3a78b-6546-40f8-90d5-be125bf547b9)

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
- Project and other data is stored in `.json` files under `src/data/`. 
- Images are stored in `src/assets`, which allows Astro to optimise them when building.
