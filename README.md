Live Link : - https://my-gadget-shop-ten.vercel.app

gitHub: https://github.com/Muyedrahman/my-gadget-shop


# TechNest - Futuristic E-Commerce Gadget Shop

A polished, fully responsive Next.js 15+ application built as part of the Revenio Next.js Assessment Task. It features secure Firebase Authentication, client-side performant state filtering, and protected management dashboards.

##   Key Features
- **7-Section Landing Page:** Includes fluid Glassmorphism UI components (Hero, Categories, Featured Products, Testimonials, etc.).
- **Advanced Inventory Filtration:** Instant search, category extraction, and price/rating sorting implemented via high-performance `useMemo` hooks.
- **Robust Authentication Pipeline:** Firebase powered Email/Password and Google One-Tap authentication managed via React Context API.
- **Protected Administrative Terminals:** Multi-layered security route guards (`useEffect` + conditional renders) protecting `/items/add` and `/items/manage` portals.
- **Dynamic Routing:** Individual specification matrix rendering for product structures using Next.js App Router.
- **State Persistence:** LocalStorage pipelines utilized to maintain state across newly appended hardware entries.

##   Tech Stack & Architecture
- **Framework:** Next.js 15+ (App Router Architecture)
- **Library:** React 19
- **Security & Auth:** Firebase v10+ Auth Engine (Context API State Grid)
- **Styling:** Tailwind CSS v4 & React Icons
- **Deployment:** Vercel Edge Runtime

##  Route Summary
- `/` - Public Landing Page (7 Modular Sections)
- `/items` - Public Core Marketplace (Filters & Search)
- `/items/[id]` - Public Dynamic Specification Blueprint
- `/about` - Public Information/Identity Portal
- `/login` & `/register` - Authentication Gateways
- `/items/add` -   Protected Item Injection Terminal
- `/items/manage` -   Protected Inventory Control Dashboard

##   Setup & Installation
 