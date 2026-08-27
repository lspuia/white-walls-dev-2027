# White Walls — whitewalls.in

Interior design studio, Aizawl, Mizoram. Next.js rebuild of the marketing site.

Proprietor: Liansangkimi Pachuau (Kim). GSTIN 15BABPP7051A1Z6.

## Stack

Next.js (App Router), TypeScript, Tailwind. Deploy to Vercel. Static-render every page.

## Design source

Figma: `https://www.figma.com/design/paLBfFd427bvZsgsHlJzrn/Website-White-Walls`

Three pages, one per breakpoint. Each holds five frames: Home, Profile, Interiors, Products, Contact.

| Breakpoint | Frame width | Gutter | Header logo | Footer logo |
| --- | --- | --- | --- | --- |
| Desktop | 1512 | 72 | 260 | 176 |
| Tablet | 834 | 56 | 200 | 150 |
| Mobile | 390 | 24 | 166 | 177 |

Only Home is designed. Profile, Interiors, Products and Contact are stubs — header, page title band, footer.

## Colour

| Token | Hex | Use |
| --- | --- | --- |
| `bone` | `#FBF9F6` | page ground |
| `sand` | `#F4F0E8` | services band |
| `wash` | `#E8E2D6` | footer |
| `ink` | `#4A443E` | body text |
| `soft` | `#6E6860` | secondary text |
| `mute` | `#969188` | captions, legal |
| `rule` | `#E2DCD1` | hairlines |
| `near` | `#1A1714` | inverted band, logo |
| `cream` | `#F5F2ED` | text on dark |
| `brass` | `#C8B89A` | eyebrow labels, primary button |
| `bronze` | `#8A6E45` | active nav, Mizo lines |

Brass on bone is low contrast. It is the house style for decorative eyebrow labels only. Anything a user must read or click uses `bronze` or darker.

## Type

Cormorant Garamond (Light, Light Italic) for display. Jost (Light, Medium) for UI and body.

Import both with the `latin-ext` subset — not the default `latin`. Mizo needs U+1E6D (ṭ) and U+1E6C (Ṭ), which live outside the default subset and will silently fall back mid-word.

Desktop scale after the type increase:

| Role | Size | Family |
| --- | --- | --- |
| Hero display | 93.5 | Cormorant Light Italic |
| Page title (stubs) | 80.5 | Cormorant Light |
| Section heading | 46.5 | Cormorant Light |
| Statement | 33.5 | Cormorant Light |
| Product / service name | 24.5–31.5 | Cormorant Light |
| Lead paragraph | 17.5–19 | Jost Light |
| Body | 15.5 | Jost Light |
| Nav | 12.5 | Jost Medium |
| Eyebrow / small caps | 12.5, tracked 2.4 | Jost Light |

The scale is ad-hoc, not a ramp. Consolidate into tokens during the build rather than porting the exact numbers.

## Home page sections

1. Header — centred logo, nav beneath
2. Hero — full bleed image, scrim, centred display type, scroll cue
3. Statement — centred, brass rule
4. ~~Gallery~~ — hidden pending photography, do not build yet
5. Philosophy band — `near` ground, quote only, no attribution
6. Products — eight tiles (Hettich, Brassage, Häfele, Veneto, VMZINC, Hardware, Glass Installations, Electric Fireplaces)
7. Services — three columns, hairline rules
8. Contact — centred, brass primary button + outline secondary
9. Footer — `wash` ground, logo, nav, legal line

Desktop products render 4-across (2 rows); tablet 3-across; mobile 2-across. Services are three columns on desktop, stacked on tablet and mobile. Mobile header has a hamburger, no visible nav — the menu overlay is not designed yet.

## Hard constraints

**Never use "architect", "architecture" or "architectural" in customer-facing copy.** Under India's Architects Act 1972 only registered architects may use the title, and an interior design firm cannot. Use "layout", "space planning", "spatial planning" or "design".

**Never re-set the logo as type.** It is a component (`LOGO-V3` in Figma). Export as SVG and use the asset. Aspect ratio 659:354. Only recolour for reversed use on dark grounds.

**Never mix VIEWS or Saint-Gobain branding into this site.** Separate firm, separate GSTIN, separate identity.

**Rupees only**, Indian digit grouping — `toLocaleString('en-IN')`. No multi-currency.

## Bilingual

English carries structure. Mizo appears only at points of contact — contact section, WhatsApp CTA, footer address — set in the Jost Medium small-caps label tier at `bronze`, roughly 60–70% of the adjacent English size. Never the same sentence twice at the same weight.

Wrap every Mizo span in `lang="lus"` (Mizo has no two-letter ISO code). Copy is written by the owners, never machine-translated.

## Lead generation

WhatsApp, not email forms. Results-first, then a click-to-WhatsApp CTA with a pre-filled message. Track WhatsApp clicks as the primary conversion.

## Assets outstanding

- Hero photograph is placed; needs a portrait crop for mobile (current centre-crop fails at 390)
- Hero scrim is too light for the current pale photo — small text over it is unreadable
- Eight product tile images
- Four project images, once the gallery returns
- Reversed logo variant, if any dark section other than the philosophy band appears