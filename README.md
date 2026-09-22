# Elizabeth "Liz" Finnegan — Real Estate

A premium personal real estate website for **Elizabeth "Liz" Finnegan**, Real
Estate Salesperson at **Houlihan Lawrence, Yorktown Brokerage**, serving
Westchester & Putnam County, New York.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Design goals

The site is designed to feel welcoming, elegant, warm, and locally focused —
like a custom-built realtor site, not a template. Within moments a visitor
should understand that Liz is:

1. **Experienced and successful** — 16+ years, $45M+ closed, award-winning.
2. **A local expert** — a Yorktown Heights resident with deep knowledge of the
   Westchester & Putnam communities.
3. **Friendly and easy to reach** — call/text/email are front-and-center
   throughout.

## Content architecture — important

There are two kinds of content, kept intentionally separate:

- **Static profile content** (bio, contact info, awards, credentials,
  stats, reviews, communities) lives in a typed **data layer** under
  [`src/data/`](src/data). The site reads from this data layer at build time.
  **It does not scrape the Houlihan Lawrence website at runtime.**
- **Presentation** (layout, styling, animation) lives in
  [`src/components/`](src/components) and [`src/app/`](src/app).

To update any profile content, edit the relevant file in `src/data/` — no
component changes are required.

### Data files

| File | Content |
| --- | --- |
| `src/data/profile.ts` | Name, title, brokerage, bio, contact info, headshot |
| `src/data/stats.ts` | Career statistics |
| `src/data/awards.ts` | Awards & credentials |
| `src/data/communities.ts` | Featured towns / local areas |
| `src/data/testimonials.ts` | Client reviews + review summary |
| `src/data/services.ts` | Service offerings |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Assets to replace before launch

- **Headshot:** `public/images/liz-finnegan.jpg` is currently a branded
  placeholder. Drop in Liz's authorized professional headshot at the same path
  (portrait, ~640×800+). See `public/images/README-headshot.md`.
- **Community & background photography:** the community cards and hero use
  royalty-free Unsplash placeholders that evoke the Hudson Valley region.
  Swap the `image` URLs in `src/data/communities.ts` and the background URLs in
  the hero / CTA sections for authorized local photography when available.
- **Email address:** `src/data/profile.ts` uses a standard Houlihan Lawrence
  email pattern; confirm and update to Liz's exact address.

## Notes on data sources

Static profile facts (experience, sales volume, awards, review counts, contact
details) were compiled from Liz's authorized public profiles and verified prior
to build. Testimonials reflect the sentiment and themes of her verified
five-star reviews, with client identities shown as first name + initial /
descriptor to protect privacy.
