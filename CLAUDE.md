# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages personal site (nmikle.com) built with SvelteKit and TypeScript. It uses the static adapter to generate static HTML/CSS/JS files for deployment.

## Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `build/`)
- `npm run preview` - Preview production build locally
- `npm run check` - Run svelte-check for type errors

## Deployment

Pushing to the `master` branch triggers GitHub Actions to automatically build and deploy to GitHub Pages.

## Project Structure

- `src/routes/` - SvelteKit pages and layouts
- `src/routes/+layout.ts` - Enables prerendering for all routes
- `src/hooks.server.ts` - HTML minification during build
- `static/` - Static assets (copied as-is to build output)
- `static/CNAME` - Custom domain config (must be in static/, not root, so it's copied to build/)

## Build Optimizations

- **JS minification** - Terser with console/debugger removal
- **HTML minification** - via SvelteKit hooks (transformPageChunk)
- **Precompress** - generates .gz and .br files for all assets
