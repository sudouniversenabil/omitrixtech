# Omitrix Tech

Company website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify before deployment

```bash
npm run check
npm run build
```

The site does not require environment variables to build or run.

## Deploy to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Keep the detected Next.js framework settings and deploy. Vercel uses the
   included npm lockfile to install dependencies and runs `npm run build`.
4. Add a custom domain from the project’s Vercel settings if needed.

## Self-hosting

On a Node.js 20.9+ host, install dependencies and build the app:

```bash
npm ci
npm run build
npm run start
```

The production server listens on port 3000 by default. Set `PORT` in the host
environment to use a different port.
