# Vertigo

A fast, modern marketing **landing page** built with Next.js — clean, responsive, and conversion-focused.

🔗 **Live demo:** https://vertigo-app.vercel.app

> Commissioned project — a landing page built for a client.

## Highlights

- Responsive, mobile-first layout that looks sharp on any screen.
- Lead capture: a contact form with an international phone-number input, submitted via API.
- Component-driven structure (widgets / shared / page components) for easy reuse.
- Lightweight and quick to load.

## Tech stack

- **Next.js** (React) + **TypeScript**
- **styled-components** for styling
- **axios** for form/API requests
- **react-phone-input-2** for the phone field
- Deployed on **Vercel**

## Run locally

```bash
git clone https://github.com/diasqazaqbro/vertigo.git
cd vertigo
yarn install      # or: npm install
yarn dev          # http://localhost:3000
```

Production build:

```bash
yarn build && yarn start
```

## Structure

```
app/              # app entry
pages/            # routes
pagesComponents/  # page-specific sections
widgets/          # reusable page blocks
shared/           # shared UI / utils
public/           # static assets
```
