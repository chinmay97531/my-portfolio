# Chinmay Mittal — Portfolio

A modern, animated personal portfolio built with **Next.js**, **TypeScript**, and a live **3D background** powered by WebGL. Deployed as a static site to GitHub Pages at [chinmaymittal.dev](https://chinmaymittal.dev).

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** (App Router) + **React 18**
- **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com/)** for styling and the design system
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** + **[drei](https://github.com/pmndrs/drei)** + **[three.js](https://threejs.org/)** for the animated 3D particle background
- **[Framer Motion](https://www.framer.com/motion/)** for scroll and entrance animations
- **[lucide-react](https://lucide.dev/)** for icons

## Features

- Interactive 3D particle field background with subtle pointer parallax
- Animated hero with a typing effect (custom, no external library)
- Sticky glassmorphism navigation with a responsive mobile menu
- Skills grid and project cards with reveal-on-scroll animations
- Fully responsive, accessible, and `prefers-reduced-motion` aware
- SEO metadata, Open Graph / Twitter cards, Person JSON-LD, sitemap, robots.txt, and `llms.txt`

## Getting Started

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:3000
npm run build     # produce a static export in ./out
```

## Project Structure

```
app/            # App Router entry (layout, page, global styles)
components/     # UI + 3D background components
lib/data.ts     # Skills, projects, and social link data
public/         # Static assets (logos, images, CNAME, .nojekyll)
```

## Deployment

The site is a static export (`output: "export"` in `next.config.mjs`). The
included GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the
site and publishes the `out/` directory to GitHub Pages on every push to
`main`. The custom domain is configured via `public/CNAME`.

## SEO & discoverability (after deploy)

On-site signals (metadata, H1, About, JSON-LD, `/sitemap.xml`, `/robots.txt`, `/llms.txt`) ship with the site. Ranking and ChatGPT visibility also need off-site follow-up:

1. **Google Search Console** — add `https://chinmaymittal.dev`, submit `https://chinmaymittal.dev/sitemap.xml`, and request indexing of the homepage. Confirm view-source shows your name, Thapar, Zscaler, and `application/ld+json`.
2. **Bing Webmaster Tools** — add the same property and sitemap (ChatGPT often uses Bing’s index for web results).
3. **LinkedIn** — headline/about: “Software Engineer | Thapar Institute | Zscaler intern”; feature `chinmaymittal.dev`.
4. **GitHub** — profile bio + website link; pin major repos; use the exact name **Chinmay Mittal** everywhere.
5. **Keep identity consistent** — same name, photo, school, and employer across LinkedIn, GitHub, resume, and this site.
6. **Earn mentions off-domain** — Thapar/ELC pages, hackathon writeups, Dev.to/Hashnode posts, and project READMEs that link back.

Expect technical indexing within days; name-query visibility typically builds over weeks to months as profiles and mentions corroborate the same entity.

## Contact

- GitHub: [chinmay97531](https://github.com/chinmay97531)
- LinkedIn: [Chinmay Mittal](https://www.linkedin.com/in/chinmay-mittal-695825257/)
- Email: chinmaymittal0000@gmail.com
