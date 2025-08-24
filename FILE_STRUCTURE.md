# File Structure and Descriptions

This document explains the Trippi project structure and the purpose of each key file.

```
/workspace
├─ app_functionality.txt            # MVP scope and feature notes (reference)
├─ index.html                       # Vite entry HTML mounting the React app
├─ package.json                     # Project metadata, scripts, dependencies
├─ postcss.config.js                # PostCSS config enabling Tailwind and Autoprefixer
├─ tailwind.config.ts               # Tailwind theme and class scanning
├─ tsconfig.json                    # TypeScript configuration
├─ vite.config.ts                   # Vite build config and path aliases
├─ README.md                        # Setup, scripts, and developer notes
├─ FILE_STRUCTURE.md                # You are here
└─ public/
   └─ Trippi_logo.png               # App logo used across the UI

src/
├─ main.tsx                         # React entry point; mounts Router and providers
├─ App.tsx                          # App wrapper (kept for future global providers)
├─ styles/
│  └─ index.css                     # Tailwind directives and global styles
├─ routes/
│  └─ AppRoutes.tsx                 # Centralized route definitions
├─ components/
│  ├─ layout/
│  │  ├─ AppShell.tsx               # Global layout: Navbar + Sidebar + content slot
│  │  ├─ Navbar.tsx                 # Top navigation with brand and links
│  │  └─ Sidebar.tsx                # Contextual actions and quick stats
│  ├─ common/
│  │  ├─ Button.tsx                 # Reusable button variants
│  │  ├─ Card.tsx                   # Card container styling
│  │  ├─ Logo.tsx                   # Logo component
│  │  └─ ProgressBar.tsx            # Savings/budget progress indicator
│  └─ trips/
│     └─ README_PLACEHOLDER.txt     # Placeholder for trip-specific components
├─ pages/
│  ├─ LandingPage.tsx               # Marketing hero and feature cards
│  ├─ TripsPage.tsx                 # List of trips with progress
│  ├─ TripDetailPage.tsx            # Itinerary + budget breakdown per trip
│  ├─ PlannerPage.tsx               # Itinerary planner surface (mock)
│  ├─ BudgetPage.tsx                # Global budget overview and actions
│  ├─ InvitesPage.tsx               # Manage invites and ownership
│  ├─ SettingsPage.tsx              # App preferences (placeholder)
│  └─ README_PLACEHOLDER.txt        # Folder purpose note
├─ context/
│  └─ TrippiContext.tsx             # Mock app state for trips and actions
├─ services/                        # Future API services (placeholder)
├─ types/
│  └─ index.ts                      # Shared domain types (Trip, Budget, etc.)
└─ utils/                           # Utility helpers (placeholder)
```

Notes:
- At the top of each source file is a brief description of its purpose.
- When you edit a file, update its top description accordingly.
- Add new features by creating components under `components/` and pages under `pages/`.