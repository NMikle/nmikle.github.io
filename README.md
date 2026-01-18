# nmikle.com

Personal website built with SvelteKit and TypeScript, deployed to GitHub Pages.

## Live Site

[https://nmikle.com](https://nmikle.com)

## Development

### Prerequisites

- Node.js 22+
- npm

### Setup

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Opens a development server at `http://localhost:5173` with hot reload.

### Building

```bash
npm run build
```

Outputs static files to `build/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run check
```

## Deployment

Pushing to the `master` branch automatically triggers a GitHub Actions workflow that builds and deploys the site to GitHub Pages.

## Tech Stack

- [SvelteKit](https://svelte.dev/docs/kit) - Web framework
- [Svelte 5](https://svelte.dev) - UI framework
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [Vite](https://vite.dev) - Build tool

## License

MIT
