<div align="center">

```
███╗   ███╗██╗████████╗██╗  ██╗██████╗  █████╗ ██████╗ ███████╗██╗   ██╗
████╗ ████║██║╚══██╔══╝██║  ██║██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║
██╔████╔██║██║   ██║   ███████║██████╔╝███████║██║  ██║█████╗  ██║   ██║
██║╚██╔╝██║██║   ██║   ██╔══██║██╔══██╗██╔══██║██║  ██║██╔══╝  ╚██╗ ██╔╝
██║ ╚═╝ ██║██║   ██║   ██║  ██║██║  ██║██║  ██║██████╔╝███████╗ ╚████╔╝ 
╚═╝     ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝  ╚═══╝ 
```

**`> Mithradev T V — Portfolio OS v3.0`**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Motion](https://img.shields.io/badge/Motion-12.x-FF0055?style=flat-square)](https://motion.dev)

*A cyberpunk-themed developer portfolio with matrix rain, glitch effects, animated skill bars, and a terminal aesthetic.*

[Live Demo](https://github.com/mithradevtv-droid/creative-portfolio) · [Contact Me](mailto:mithradevtv.work@gmail.com) · [LinkedIn](https://www.linkedin.com/in/mithradev-t-v-1294652a2/)

</div>

---

## ✦ Features

- **Matrix Rain** — Canvas-based falling character animation in the Hero section
- **Typing Animation** — Cycles through roles with a blinking cursor effect
- **Glitch Text** — RGB-split CSS glitch effect on section headings
- **Animated Skill Bars** — Scroll-triggered progress bars with percentage labels
- **CountUp Stats** — Animated number counters in the About section
- **Scroll Progress Bar** — Neon line at the top tracking page scroll position
- **Active Section Nav** — Navbar highlights the current section using IntersectionObserver
- **Floating Social Dock** — GitHub / LinkedIn / WhatsApp icons pinned to the right side
- **Back to Top Button** — Appears after scrolling 400px with a cyberpunk clip-path style
- **Film Grain Overlay** — Subtle noise texture for that analog terminal feel
- **Scanline Effect** — Animated scanline sweep across the page
- **EmailJS Contact Form** — Functional contact form with real email delivery
- **Project Tag Filter** — Click tags to filter projects by technology
- **Fully Responsive** — Mobile-first layout with a collapsible nav menu

## ✦ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Motion (Framer Motion) |
| Icons | Lucide React |
| UI Components | Shadcn/ui (custom themed) |
| Email | EmailJS |
| Font | JetBrains Mono + Inter |

## ✦ Project Structure

```
creative-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── App.tsx                  # Root layout + noise overlay
    ├── index.css                # Global styles, animations, CSS vars
    ├── main.tsx                 # React entry point
    └── components/
        ├── Navbar.tsx           # Sticky nav + scroll progress + active section
        ├── Hero.tsx             # Matrix rain + typing animation + glitch
        ├── About.tsx            # CountUp stats + animated feature cards
        ├── Projects.tsx         # Filterable project grid with stagger animations
        ├── Skills.tsx           # Animated skill bars grouped by category
        ├── Contact.tsx          # EmailJS contact form
        ├── Footer.tsx           # Links + social icons
        ├── FloatingSocial.tsx   # Fixed social dock + back-to-top button
        └── ui/
            ├── button.tsx
            ├── badge.tsx
            ├── card.tsx
            └── separator.tsx
```

## ✦ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/mithradevtv-droid/creative-portfolio.git
cd creative-portfolio

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get these from [EmailJS Dashboard](https://www.emailjs.com/) — it's free for up to 200 emails/month.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy anywhere.

## ✦ Deployment

This project deploys easily to **Vercel** (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect the repo to [vercel.com](https://vercel.com) for automatic deployments on every push.

> ⚠️ Remember to add your `VITE_EMAILJS_*` environment variables in the Vercel dashboard under **Settings → Environment Variables**.

## ✦ Customization

- **Your info** — Update name, bio, links, and project details in each component
- **Colors** — Edit CSS variables in `src/index.css` under `@theme`
- **Projects** — Edit the `projects` array in `src/components/Projects.tsx`
- **Skills** — Edit the `skillCategories` array in `src/components/Skills.tsx`
- **Stats** — Edit the `stats` array in `src/components/About.tsx`

## ✦ Contact

**Mithradev T V**

- Email: [mithradevtv.work@gmail.com](mailto:mithradevtv.work@gmail.com)
- LinkedIn: [mithradev-t-v](https://www.linkedin.com/in/mithradev-t-v-1294652a2/)
- WhatsApp: [+91 9633389027](https://wa.me/919633389027)
- GitHub: [@mithradevtv-droid](https://github.com/mithradevtv-droid)

---

<div align="center">
  <sub>Built with ☕ and way too much CSS by Mithradev T V</sub>
</div>
