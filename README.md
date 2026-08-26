# Profile Personal

A personal portfolio website built with **React + TypeScript + Vite**, styled with **Tailwind CSS** and using the **shadcn/ui** component library.

## Tech Stack

- **React** – library for building user interfaces
- **TypeScript** – static type checking for JavaScript
- **Vite** – fast build tool & dev server
- **Tailwind CSS** – utility-first CSS framework
- **shadcn/ui** – pre-built, customizable UI components
- **ESLint** – code quality and linting

## Project Structure

```
Profile_Personal/
├── components.json          # shadcn/ui configuration
├── eslint.config.js         # ESLint configuration
├── index.html                # Root HTML file
├── package.json               # Project metadata & dependencies
├── package-lock.json
├── postcss.config.js         # PostCSS config (used by Tailwind)
├── public/                    # Static assets
│   ├── placeholder.svg
│   ├── robots.txt
│   └── vite.svg
├── src/
│   ├── App.css
│   ├── App.tsx                # Root application component
│   ├── assets/                # Images and static assets used in code
│   │   └── react.svg
│   ├── components/            # Main UI section components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ui/                # Reusable UI component library (shadcn/ui)
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── ... (other UI components)
│   │       └── use-toast.ts
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── index.css               # Global stylesheet (Tailwind directives)
│   ├── lib/
│   │   └── utils.ts            # Shared utility functions
│   ├── main.tsx                # Application entry point
│   ├── pages/                  # Application pages/routes
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   └── vite-env.d.ts           # Vite type declarations
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.app.json           # TypeScript config for the app
├── tsconfig.json                # Base TypeScript configuration
├── tsconfig.node.json           # TypeScript config for the Node environment
└── vite.config.ts               # Vite configuration
```

## Installation

Requirements: **Node.js** (LTS version recommended) and **npm** installed.

```bash
npm install
```

## Run in Development Mode

```bash
npm run dev
```

Once running, open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

The build output will be generated in the `dist/` folder.

## Lint the Codebase

```bash
npm run lint
```

## Main Components

| Component | Description |
|---|---|
| `HeroSection.tsx` | Header/banner introduction section |
| `AboutSection.tsx` | About-me section |
| `SkillsSection.tsx` | Skills showcase section |
| `ProjectsSection.tsx` | Portfolio/projects section |
| `ContactSection.tsx` | Contact information section |
| `Navigation.tsx` | Navigation bar |
| `Footer.tsx` | Page footer |



