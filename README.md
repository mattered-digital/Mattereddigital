# ✦ Matter Digital

Matter is a premier web agency and digital marketing powerhouse. We specialize in custom web solutions, AI agents, and high-performance marketing strategies for global brands.

![Matter Digital Banner](public/mattered.png)

## Overview

This repository contains the source code for the official Matter agency website, built with a modern stack focusing on extreme performance, sleek aesthetics, and flawless user experiences. It features a custom dark-mode design system, advanced scroll animations, and optimized static rendering.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS (Custom Dark Mode & Layouts)
- **Animations:** [GSAP](https://gsap.com/) & [Lenis](https://lenis.studiofreight.com/) (Smooth Scrolling)
- **Analytics:** Vercel Analytics

## 📁 Project Structure

- `app/` - Next.js App Router (Pages: Home, About, Services, Projects, Contact)
- `components/` - Reusable UI components (Nav, Footer, GridOverlay, CustomCursor, etc.)
- `data/` - Static data for projects, services, and brand references
- `public/` - Static assets and imagery
- `types/` - TypeScript interface definitions

## 🛠 Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm/pnpm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aakashmatteredai-jpg/mattered-digital.git
   cd mattered-digital
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🚢 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/):

```bash
npm run build
npm run start
```

## 📈 SEO & Sitemaps

The project includes an auto-generated sitemap (`app/sitemap.ts`) and a dynamically configured `robots.ts` file that correctly indexes all interior pages and cross-links to the external SEO subdomain (`https://seo.mattered.digital/`).

---

**All rights reserved © 2026 Matter agency**
