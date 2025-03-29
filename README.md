# Astro + Svelte 5 App

This is a modern web application built with [Astro](https://astro.build) and [Svelte 5](https://svelte.dev/blog/svelte-5-preview).

## 🚀 Project Structure

```
/
├── src/
│   ├── components/
│   │   └── Counter.svelte
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
├── svelte.config.js
└── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :----------------------- | :----------------------------------------------- |
| `npm install`            | Installs dependencies                            |
| `npm run dev`            | Starts local dev server at `localhost:4321`      |
| `npm run build`          | Build your production site to `./dist/`          |
| `npm run preview`        | Preview your build locally before deploying      |
| `npm run astro ...`      | Run CLI commands like `astro add`, `astro check`|

## 🎈 Features

- Astro 4.x
- Svelte 5 with runes
- TypeScript support
- Modern development environment

## 📝 Notes

This project uses Svelte 5's new runes syntax. Key features include:

- `$state()` for reactive state
- `$derived()` for computed values
- `$effect()` for side effects
- New event handling syntax (e.g., `onclick` instead of `on:click`)

## 🚀 Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:4321`

## 📦 Dependencies

- astro
- @astrojs/svelte
- svelte
- typescript
- @astrojs/check