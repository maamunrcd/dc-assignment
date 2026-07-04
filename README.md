# dc-assignment — METATECH Landing Page

A full-stack assessment project that converts the METATECH Figma design into a responsive, API-driven React application backed by a Node.js/Express REST API.

**Repository:** [github.com/maamunrcd/dc-assignment](https://github.com/maamunrcd/dc-assignment)

---

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [Assumptions](#assumptions)
- [Future Improvements](#future-improvements)
- [Bonus Criteria](#bonus-criteria)

---

## Technologies Used

| Layer | Stack |
|-------|-------|
| **Frontend** | React 19, TypeScript, Vite 8, Tailwind CSS v4, React Router 7, TanStack React Query, Axios |
| **Backend** | Node.js, Express 4, TypeScript, CORS |
| **State** | React Query (server state) + React Context (UI: mobile menu) |
| **Tooling** | concurrently (monorepo dev), tsx (backend hot reload), oxlint |

---

## Features

- Dynamic content from REST APIs (no hardcoded page copy)
- Page-level and layout-level loading skeletons
- Graceful API error handling with retry actions
- Global `ErrorBoundary` for unexpected render failures
- Mobile-first responsive layout (hero, header hamburger, solutions tabs)
- Separate desktop/mobile hero images via API (`backgroundImage`, `mobileImageUrl`)
- Performance: route code splitting + **Import on Visibility** for below-fold sections
- Basic SEO: semantic HTML, `lang`, meta description, document title

---

## Prerequisites

- **Node.js** >= 20
- **npm** >= 9

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/maamunrcd/dc-assignment.git
cd dc-assignment
```

### 2. Install dependencies

```bash
npm run install:all
```

This installs packages for the root workspace, `frontend/`, and `backend/`.

### 3. Configure environment (optional)

```bash
cp backend/.env.example backend/.env
cp frontend/env.example frontend/.env
```

Defaults work out of the box for local development.

### 4. Start development servers

```bash
npm run dev
```

| Service | URL |
|---------|-----|
| Frontend (Vite) | http://localhost:5173 |
| Backend (Express) | http://localhost:3001 |
| Health check | http://localhost:3001/health |

Vite proxies `/api/*` to the backend in development, so the frontend can call APIs without CORS issues.

### 5. Production build

```bash
npm run build          # Build frontend
cd backend && npm run build && npm start   # Build & run backend
cd frontend && npm run preview             # Preview frontend build
```

---

## Project Structure

```
dc-assignment/
├── package.json              # Root scripts (concurrently)
├── README.md
├── backend/
│   └── src/
│       ├── app.ts            # Express app + route mounting
│       ├── server.ts         # HTTP server entry
│       ├── controllers/      # Request handlers
│       ├── routes/           # /api/home, /api/site, /api/sections/*
│       ├── services/         # Domain services (hero, solutions, etc.)
│       ├── data/             # Static JSON content (home.json, site.json)
│       ├── middleware/       # Error handling
│       └── utils/            # sort, asyncHandler
└── frontend/
    ├── public/               # Static assets (hero, logos, icons)
    └── src/
        ├── app/                # Page components (home, not-found)
        ├── components/
        │   ├── Atoms/          # Link, LazyImage, LazyOnVisible, Spinner, etc.
        │   ├── Layout/         # Header, MainLayout
        │   ├── ErrorBoundary/
        │   └── Providers/      # QueryClient + WebsiteContext
        ├── features/           # Feature modules (hero, solutions, showcase, …)
        │   ├── hero/
        │   ├── trusted-by/
        │   ├── solutions/
        │   ├── showcase/
        │   ├── tech-stack/
        │   ├── site/           # Footer + useSiteQuery
        │   └── home/           # useHomePageQuery, lazy-sections
        ├── lib/
        │   ├── config/         # endpoints, navigation
        │   └── query/          # query keys, cache hydration
        ├── routes/             # React Router + lazy pages
        ├── services/           # Axios instance + API fetchers
        └── types/              # Shared API TypeScript types
```

### Architecture highlights

- **BFF pattern:** `GET /api/home` aggregates all home sections in one request.
- **Section endpoints:** Reusable `GET /api/sections/*` routes for individual sections.
- **Site config:** `GET /api/site` serves footer data separately from home content.
- **Props-based sections:** Components accept typed props; hooks hydrate caches when home data loads.
- **Section hooks (`useHeroQuery`, etc.):** Reserved for future standalone pages that fetch individual sections via `/api/sections/*` without loading the full home payload.
- **Lazy loading:** Below-fold sections (`Solutions`, `Showcase`, `TechStack`) load JS chunks when scrolled into view.

---

## API Documentation

### `GET /api/home`

Returns all home page sections (hero, trusted-by, solutions, showcase, tech stack).

```json
{
  "hero": {
    "id": "hero-current",
    "title": "Building Intelligence To Power Scalable Innovation",
    "titleAccent": "Intelligence To Power",
    "subtitle": "...",
    "cta": { "label": "Book for Demo", "href": "#contact" },
    "media": {
      "backgroundImage": "/hero-banner.png",
      "mobileImageUrl": "/hero-mobile.png",
      "playUrl": "https://www.youtube.com/watch?v=...",
      "alt": "MetaTech team"
    }
  },
  "trustedBy": { "logos": [{ "id": "brand-1", "imageUrl": "/brand1.png", "imageTitle": "...", "order": 1 }] },
  "solutions": { "defaultTabId": "data-ai", "tabs": [] },
  "showcase": { "defaultProductId": "ami-credible", "products": [] },
  "techStack": { "title": "...", "subtitle": "...", "rows": [] }
}
```

### `GET /api/site`

Returns global site data (footer).

```json
{
  "footer": {
    "copyright": { "prefix": "©", "year": 2026, "company": "METATECH" },
    "legal": [{ "label": "Privacy Policy", "href": "#" }],
    "socials": [{ "label": "LinkedIn", "href": "#", "icon": "linkedin" }],
    "brandBanner": { "imageUrl": "/footer-bg.png" }
  }
}
```

### Section endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/sections/hero` | Active hero content |
| `GET /api/sections/trusted-by` | Trusted client logos |
| `GET /api/sections/solutions` | Solutions tabs + features |
| `GET /api/sections/showcase` | Product highlight carousel |
| `GET /api/sections/tech-stack` | Technology logos grid |

### Error responses

```json
{ "message": "Route not found" }
```

HTTP errors are normalized on the frontend via an Axios response interceptor.

---

## Environment Variables

### Backend (`backend/.env`)

```env
PORT=3001
```

### Frontend (`frontend/.env`)

```env
# Leave empty in development — Vite proxies /api to localhost:3001
# VITE_BACKEND_API_URL=http://localhost:3001
```

Set `VITE_BACKEND_API_URL` when deploying the frontend separately from the API.

---

## Deploy to Vercel

This project is configured for **full-stack deployment on Vercel**: the Vite frontend is served as static files and the Express API runs as a serverless function at `/api/*`.

### Steps

1. Go to [vercel.com/new](https://vercel.com/new) and import `maamunrcd/dc-assignment`.
2. **Root Directory:** leave as `./` (repository root).
3. **Framework Preset:** Other (Vercel reads settings from `vercel.json`).
4. **Environment Variables:** none required — the frontend calls `/api` on the same domain.
5. Click **Deploy**.

### How it works

| Path | Handler |
|------|---------|
| `/`, `/index.html` | Vite build (`frontend/dist`) |
| `/api/home`, `/api/site`, `/api/sections/*` | Express app (`api/index.ts`) |
| `/health` | Express health check |

### Local preview (optional)

```bash
npm i -g vercel
vercel dev
```

---

## Assumptions

1. **Static JSON content** — No database or authentication; content is managed in `backend/src/data/*.json`.
2. **Active hero selection** — The hero with `isActive: true` is served by the API.
3. **Plain text in API** — No HTML in JSON; accent styling is applied on the frontend (`titleAccent`).
4. **Single landing page** — Anchor navigation (`#home`, `#solutions`, `#showcase`, `#contact`).
5. **Public assets** — Images referenced in JSON live in `frontend/public/`.
6. **Intro copy is static** — The solutions “We Are />” intro block is UI copy, not API-driven.
7. **Play button** — Links to an external URL (`playUrl`); no embedded video modal.
8. **Modern browsers** — Targets evergreen browsers (Chrome, Firefox, Safari, Edge).

---

## Future Improvements

- [x] Deploy to Vercel (frontend + API serverless function)
- [ ] Add unit/integration tests (Vitest + React Testing Library)
- [ ] Open Graph tags, Twitter cards, and JSON-LD structured data
- [ ] Scroll-triggered animations (Framer Motion or CSS `@keyframes`)
- [ ] Image `srcSet` / `<picture>` for responsive hero assets
- [ ] CMS integration to replace static JSON
- [ ] Per-section error boundaries if sections fetch independently
- [ ] Accessibility audit (focus traps in mobile menu, reduced motion)

---

## Bonus Criteria

| Criteria | Status |
|----------|--------|
| TypeScript (frontend + backend) | ✅ Implemented |
| Performance optimization | ✅ Route splitting, React Query cache, lazy images, Import on Visibility |
| Basic SEO | ✅ `lang`, title, meta description, semantic landmarks |
| Animations & transitions | ✅ Skeleton pulse, hover states, tab transitions |
| Unit tests | ❌ Not implemented |
| Deployed application | ✅ Vercel-ready (`vercel.json` + `api/index.ts`) |

---

## Design Tokens

| Token | Value |
|-------|-------|
| Primary dark | `#001A11` |
| Primary | `#003D28` |
| Accent (neon green) | `#06FF70` / `#00FF41` |
| Surface (cards) | `#EFEFEF` |
| Font | Inter |

---

## License

Assessment project — not for commercial distribution.
