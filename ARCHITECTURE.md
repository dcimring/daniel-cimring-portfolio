# Daniel Cimring Portfolio Architecture

## Overview
This portfolio is a high-performance, cutting-edge web application designed to showcase Daniel Cimring's expertise at the intersection of Software Engineering, Finance, and Bitcoin.

## Tech Stack
- **Framework:** React 19 (Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (Alpha/Next)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Typography:** JetBrains Mono (Display/UI), Geist Sans (Body)

## Key Architectural Decisions

### 1. Aesthetic Direction: "Industrial Financial"
- **Color Palette:** Deep Obsidian (#0A0A0B), High-contrast White (#FAFAFA), and Bitcoin Orange (#F7931A).
- **Scanline Effect:** A custom CSS-based fixed overlay that gives the site a "terminal" or "monitor" feel.
- **Monospaced Focus:** Heavy use of JetBrains Mono to emphasize the "developer" and "data-centric" nature of the work.

### 2. Live Data Integration
- **BitcoinPrice Component:** A real-time ticker in the navigation bar that fetches the current BTC/USD rate every 60 seconds from the CoinDesk API. This reinforces Daniel's "Sound Money Maximalist" profile.

### 3. Component Architecture
- **Section Wrapper:** A reusable component that maintains consistent padding, borders, and monospaced headers.
- **Motion-Enhanced Cards:** `ProjectCard` and `SkillBadge` use Framer Motion for subtle hover translations and staggered entry animations.
- **Utility-First Styling:** Extensive use of Tailwind v4's new `@theme` engine for consistent variable management.

### 4. Code Quality & Standards
- **Strict Typing:** All components are fully typed with TypeScript.
- **Linting:** Configured with ESLint and `@typescript-eslint` for consistent code style.
- **Utility Functions:** Includes a `cn` (clsx + tailwind-merge) utility for dynamic class management.

## Project Structure
```
src/
├── lib/
│   └── utils.ts        # CN utility for Tailwind
├── App.tsx             # Main application & sections
├── index.css           # Tailwind v4 configuration & global styles
├── main.tsx            # Entry point
└── vite-env.d.ts       # Type definitions
```
