# Pbthang's Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/77f1ee90-5361-4717-b7e2-c5f84f6db646/deploy-status)](https://app.netlify.com/sites/pbthang/deploys)

My personal portfolio developed with [Astro](https://astro.build), [TailwindCSS](https://tailwindcss.com) and [daisyUI](https://daisyui.com), built as a static site and deployed on [Netlify](https://netlify.com) at [https://pbthang.netlify.app/](https://pbthang.netlify.app/).

## ✏️ Editing content

All site content lives in the repo — no CMS or environment variables are required.

| What | Where |
| :-- | :-- |
| Name, role, bio, hero typewriter lines, contacts, playlist, metadata | `src/data/profile.ts` |
| Education / Experience / Others timelines | `src/data/timeline.ts` |
| Skill cards | `src/data/skills.ts` |
| Project carousel | `src/data/projects.ts` |
| Profile photo and project images | `public/images/` |
| Resume PDF | `public/files/` (update the path in `profile.resume` when replacing) |

Netlify should publish the `dist/` directory produced by `npm run build`.

## 🚀 Project Structure

Inside of your project, you'll see the following folders and files:

```txt
/
├── public/
│   ├── files/          # resume PDF
│   ├── images/         # profile photo, project images
│   ├── laptop/         # three.js model + textures for the hero
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── data/           # all site content (profile, timeline, skills, projects)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── utils/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## Astro

[Documentation](https://docs.astro.build)
