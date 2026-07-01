# METATECH — Figma to Responsive Web Application

A full-stack landing page implementation for the METATECH assessment. The project converts the provided Figma design into a responsive React application backed by a Node.js/Express REST API serving static JSON content.

## Live Demo

> Optional: deploy frontend (Vercel/Netlify) and backend (Render/Railway) and add URLs here.

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | React 19, TypeScript, Vite, Tailwind CSS v4, React Router, React Query, Axios |
| Backend | Node.js, Express, TypeScript |
| State Management | React Context (UI state) + TanStack React Query (server state) |
| Tooling | concurrently (monorepo dev), tsx (backend dev) |

## Prerequisites

- Node.js >= 20
- npm >= 9

## Quick Start

From the project root:

```bash
# Install all dependencies (root + frontend + backend)
npm run install:all

# Start both servers with one command
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- Health check: http://localhost:3001/health

In development, the frontend proxies `/api/*` requests to the backend via Vite, so no CORS setup is needed locally.

### Production build

```bash
npm run build
```

The production build output is in `frontend/dist`.

## Project Structure

```
assignment-dc/
├── package.json          # Root scripts (npm run dev)
├── README.md
├── frontend/
│   ├── public/images/    # Hero, product, and partner logo assets
│   └── src/
│       ├── app/          # Page-level components (home, not-found)
│       ├── components/   # Shared UI (Atoms, Layout, Providers, ErrorBoundary)
│       ├── context/      # WebsiteContext (feature tabs, mobile menu)
│       ├── features/home/# Feature modules (components, hooks, types)
│       ├── hooks/
│       ├── lib/config/   # Constants and API endpoints
│       ├── routes/
│       └── services/     # Axios API client
└── backend/
    └── src/
        ├── data/         # Static JSON content
        ├── controllers/
        ├── routes/
        ├── middleware/
        ├── app.ts
        └── server.ts
```

## API Documentation

### `GET /api/home`

Returns hero content, product highlight, and footer data.

```json
{
  "heroTitle": "Building Intelligence To Power Scalable Innovation",
  "heroTitleHighlight": ["Intelligence", "Scalable Innovation"],
  "heroDescription": "...",
  "heroCta": { "primary": "Get Started", "secondary": "Watch Video" },
  "heroBackgroundImage": "/images/hero-bg.svg",
  "productHighlight": {
    "title": "An AI-powered credibility checking platform",
    "description": "...",
    "ctaLabel": "Learn More",
    "image": "/images/product-tablet.svg"
  },
  "footer": {
    "products": [{ "label": "AI Platform", "href": "#" }],
    "company": [{ "label": "About Us", "href": "#about" }],
    "socials": [{ "label": "LinkedIn", "href": "...", "icon": "linkedin" }],
    "legal": [{ "label": "Privacy Policy", "href": "#" }],
    "copyright": "© 2026 METATECH. All rights reserved."
  }
}
```

### `GET /api/features`

Returns solutions section content with filterable categories.

```json
{
  "sectionTitle": "Our leading-edge solutions are designed to transform how you build",
  "sectionDescription": "...",
  "categories": ["All", "Software", "Hardware"],
  "features": [
    {
      "id": "01",
      "number": "01",
      "title": "Smart Efficiency & Innovation",
      "description": "...",
      "category": "Software",
      "ctaLabel": "Learn More"
    }
  ],
  "highlightCards": [
    { "id": "card-1", "title": "AI-driven insights", "description": "..." }
  ]
}
```

### `GET /api/partners`

Returns media and trusted-by logo data.

```json
{
  "mediaLogos": [{ "id": "nyt", "name": "The New York Times", "logo": "/images/logos/nyt.svg" }],
  "trustedLogos": [{ "id": "slack", "name": "Slack", "logo": "/images/logos/slack.svg" }],
  "trustedHeading": "Trusted by leading companies"
}
```

### Error responses

```json
{ "message": "Resource not found" }
```

## Environment Variables

### Backend (`backend/.env`)

```env
PORT=3001
```

Copy from `backend/.env.example`.

### Frontend (`frontend/.env`)

```env
# Leave empty in development (uses Vite proxy)
VITE_BACKEND_API_URL=

# For production, set to your deployed API URL
# VITE_BACKEND_API_URL=https://your-api.example.com
```

Copy from `frontend/.env.example`.

## Architecture Decisions

### Monorepo with `concurrently`

Both apps run independently with their own hot reload (Vite HMR + tsx watch). The root `npm run dev` orchestrates them without coupling build tools.

### React Context + React Query

- **React Context** manages client UI state: active feature category tabs and mobile navigation menu.
- **React Query** handles server state: fetching, caching, loading, and error/retry for API data.

This satisfies the assessment's state management requirement while keeping async data logic clean and testable.

### Folder structure

The frontend follows the `react-boilerplate-ts` conventions (`app/`, `features/`, `components/Atoms`, `services/`, `lib/config`, `routes/`) adapted for a marketing landing page without auth or i18n.

## Assumptions

1. **Static content** — No database or authentication; all content is served from JSON files.
2. **Placeholder assets** — Hero background, product mockup, and partner logos use generated SVG placeholders. Replace with exported Figma assets for pixel-perfect fidelity.
3. **Single-page app** — Navigation uses anchor links (`#services`, `#about`, `#contact`) on one route.
4. **Video play button** — Decorative only; no embedded video player wired up.
5. **CTA buttons** — "Get Started" and "Learn More" are presentational without form/modal flows.

## Future Improvements

- [ ] Deploy frontend (Vercel/Netlify) and backend (Render/Railway)
- [ ] Replace placeholder SVGs with exported Figma assets
- [ ] Add unit tests with React Testing Library and Vitest
- [ ] Add scroll-triggered animations and section transitions
- [ ] Embed a real video modal for the hero play button
- [ ] Add Open Graph / Twitter Card meta tags for social sharing
- [ ] Connect to a CMS for content management
- [ ] Add contact form with backend validation

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start backend + frontend concurrently |
| `npm run build` | Build frontend for production |
| `npm run install:all` | Install dependencies for all packages |

### Frontend only

```bash
cd frontend && npm run dev
```

### Backend only

```bash
cd backend && npm run dev
```

## Author

Assessment submission for DataCrunch — METATECH landing page implementation.
