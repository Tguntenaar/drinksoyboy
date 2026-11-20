# drinksoyboy.com

One-page site for **Drink Soyboy**, an artisanal soy drink. Vite + React + TypeScript + Tailwind,
deployed as a static-assets Cloudflare Worker.

## Develop

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs ./dist
npm run preview   # serves ./dist
```

## Deploy

```sh
./deploy.sh       # npm run build, then wrangler deploy (Worker "drinksoyboy", assets from ./dist)
```

`wrangler.jsonc` has the `drinksoyboy.com` / `www.drinksoyboy.com` custom-domain routes commented out.
Uncomment them for the first real deploy; the zone is already on Cloudflare.

## Layout

| Path | What it is |
| --- | --- |
| `src/components/Hero.tsx` | Nav, split `soy` / `boy` wordmark with the bottle dropping in between |
| `src/components/Drink.tsx` | "What's in the bottle" label and the three product points |
| `src/components/Flavors.tsx` | Original, Strawberry, Banana, Berry (scroll-snap row on mobile) |
| `src/components/Gallery.tsx` | Three-photo gallery |
| `src/components/Waitlist.tsx` | Waitlist form (placeholder, see below) |
| `src/index.css` | Wordmark/bottle layout and the one load animation (off under `prefers-reduced-motion`) |
| `tailwind.config.js` | Color and font tokens |
| `public/images/` | Product photography as WebP, each at 1024w and 640w |
| `public/og.png` | 1200x630 link-preview image |

Design tokens: milk pink `#F6CFE0`, label magenta `#E8326E` (display only) and `#C9184F` (buttons,
waitlist band), blueberry ink `#1B2152`, strawberry `#D3302B`, banana `#FFD95C`. Type is
Bagel Fat One for display and Schibsted Grotesk for text, both self-hosted through Fontsource.

## Photography

The images were exported from local originals (the `gs://soyboy-images` bucket is no longer
readable). The fruit shots are AI renders; their bottom strip was cropped to remove a generator
watermark. `soyboy-bottle.webp` is a background-removed cutout of the "soy boy" bottle render, with
the unreadable microtext on its label painted out.

## Placeholders before launch

- **Waitlist**: no backend. Submitting opens the visitor's email app with a note to
  `hello@drinksoyboy.com` (`WAITLIST_EMAIL` in `src/components/Waitlist.tsx`). Create that mailbox
  (or Cloudflare Email Routing) or swap in a real list provider.
- **Flavors**: the four flavors are presented as in development. Update the copy once the lineup is set.
