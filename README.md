# Shehab Nagy — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

- Responsive design (mobile-first)
- Interactive particle background with mouse repulsion
- Animated scroll-based section transitions
- Glass-morphism navbar with mobile sidebar
- Dark theme (zinc/indigo/amber palette)
- Static site generation — zero server required

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Particles.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── next.config.ts
└── tsconfig.json
```

## Deployment

This project uses `output: "export"` in Next.js config, generating a fully static site in the `out/` directory. Deploy to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

## License

MIT