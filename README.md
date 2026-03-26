# Consultway Infotech

**Project Management Consultancy** — Connecting private sector companies with government-backed infrastructure and solar projects across India.

🌐 **Live Site:** [https://allstarmayu.github.io/consultway-info/](https://allstarmayu.github.io/consultway-info/)

---

## About

Consultway Infotech is a project management consultancy that bridges the gap between private sector companies and government departments. We help businesses navigate complex bureaucratic processes to access government-backed infrastructure, solar, and renewable energy projects — including CSR-eligible opportunities under India's Companies Act 2013.

## Features

- ⚡ **Responsive Design** — Fully optimized for desktop, tablet, and mobile
- 🎨 **Smooth Animations** — Powered by Framer Motion with scroll-triggered reveals
- 📋 **Interactive Sections** — Hero, About, Services, Process, Testimonials, FAQ, and Contact
- 🌙 **Custom Design System** — Warm, professional palette with semantic tokens
- 📬 **Contact Form** — Ready-to-integrate inquiry form
- ♿ **Accessible** — Semantic HTML and keyboard-friendly navigation

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Vite](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Component library |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev) | Icons |

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/allstarmayu/consultway-info.git
cd consultway-info

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/             # Static assets (logos, images)
├── components/
│   ├── ui/             # shadcn/ui base components
│   ├── Navbar.tsx       # Fixed navigation bar
│   ├── HeroSection.tsx  # Hero with animated text
│   ├── StatsBar.tsx     # Key metrics display
│   ├── AboutSection.tsx # Company overview
│   ├── ServicesSection.tsx # Service offerings
│   ├── ProcessSection.tsx  # How it works steps
│   ├── WhySection.tsx   # Value propositions
│   ├── LogoBar.tsx      # Partner/client logos
│   ├── TestimonialsSection.tsx # Client testimonials
│   ├── FAQSection.tsx   # Frequently asked questions
│   ├── MidCTA.tsx       # Mid-page call to action
│   ├── ContactSection.tsx # Contact form
│   ├── Footer.tsx       # Site footer
│   └── ScrollReveal.tsx # Scroll animation wrapper
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/
│   └── Index.tsx       # Main landing page
├── index.css           # Global styles & design tokens
├── App.tsx             # App entry point
└── main.tsx            # React DOM entry
```

## Deployment

This project is configured for **GitHub Pages** with automated deployment via GitHub Actions.

### How it works

1. Push to `main` branch triggers the workflow
2. GitHub Actions runs `npm install` → `npm run build`
3. The `dist/` folder is deployed to GitHub Pages

### Setup

1. Go to your GitHub repo → **Settings** → **Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — deployment happens automatically

## License

© 2026 Consultway Infotech. All rights reserved.
