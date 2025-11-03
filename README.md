# Astro Template

This is an [Astro](https://astro.build) project demonstrating various Astro features and capabilities. This template showcases server-side rendering, API routes, content collections, framework integrations, and more.

## Demo

Live Demo: [https://astro-template.edgeone.app](https://astro-template.edgeone.app)

## 📚 Features Demonstrated

This project includes several example pages that demonstrate different Astro capabilities:

### Pages

- **`/`** - Homepage with basic Astro components and layout
- **`/components`** - Multi-framework integration example using React, Vue, and Svelte components
- **`/inter`** - Interactive page with API routes and server-side data fetching
- **`/md`** - Markdown content example using Astro's content collections
- **`/mdx`** - MDX content example combining Markdown with JSX components
- **`/static`** - Static page generation example with prerendering

### Key Features

- ✨ **Multi-framework support** - React, Vue, and Svelte integrations
- 🔄 **Server-side rendering** - Using EdgeOne Pages adapter
- 📝 **Content collections** - Markdown and MDX content management
- 🛣️ **API routes** - Server endpoints for data fetching
- 🎨 **Component islands** - Client-side interactivity with `client:*` directives
- 📦 **Content collections** - Type-safe content management

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.astro          # Base Astro component
│   │   ├── ReactCard.tsx       # React component
│   │   ├── VueCard.vue         # Vue component
│   │   ├── SvelteCard.svelte   # Svelte component
│   │   └── Clock.astro         # Clock component
│   ├── content/
│   │   ├── config.ts           # Content collection config
│   │   └── examples/
│   │       ├── md.md           # Markdown example
│   │       └── mdx.mdx         # MDX example
│   ├── layouts/
│   │   └── Layout.astro        # Base layout component
│   └── pages/
│       ├── index.astro         # Homepage
│       ├── components.astro    # Framework integration demo
│       ├── inter.astro         # API routes demo
│       ├── md.astro            # Markdown demo
│       ├── mdx.astro           # MDX demo
│       ├── static.astro        # Static page demo
│       └── api/
│           ├── cards.json.ts   # API endpoint
│           └── description.json.ts  # API endpoint
├── astro.config.mjs
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🛠️ Technologies Used

- [Astro](https://astro.build) - The web framework for content-driven websites
- [React](https://react.dev) - UI library
- [Vue](https://vuejs.org) - Progressive JavaScript framework
- [Svelte](https://svelte.dev) - Component framework
- [MDX](https://mdxjs.com) - Markdown with JSX
- [TypeScript](https://www.typescriptlang.org) - Typed JavaScript
- [EdgeOne Pages](https://edgeone.ai/pages) - Deployment platform

## 📖 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Astro Integrations](https://docs.astro.build/en/guides/integrations-guide/)

## Deploy

Deploy this project to EdgeOne Pages with one click:

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=astro-template)

More Templates: [EdgeOne Pages Templates](https://edgeone.ai/pages/templates)
