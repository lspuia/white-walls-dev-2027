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
| `soft` | `#5C5751` | secondary text |
| `mute` | `#605D57` | captions, legal |
| `rule` | `#E2DCD1` | hairlines |
| `near` | `#1A1714` | inverted band, logo |
| `cream` | `#F5F2ED` | text on dark |
| `brass` | `#C8B89A` | rules, primary button fill, text on dark |
| `bronze` | `#715A39` | eyebrow labels, links, active nav, Mizo lines |

**Brass never carries text on a light ground.** It measures 1.85:1 on `bone` — effectively invisible. Brass is for rules, the primary button fill, and text on the `near` ground (9.16:1). Every label on a light ground uses `bronze` or darker.

The audience is 25–65 and includes rural users, so readability outranks the house style. `soft`, `mute` and `bronze` were darkened to clear 4.5:1 on the *darkest* ground each sits on (`wash`), not just on `bone`. Current worst-case ratios — bone / sand / wash:

| Token | bone | sand | wash |
| --- | --- | --- | --- |
| `bronze` | 6.20 | 5.73 | 5.05 |
| `mute` | 6.24 | 5.77 | 5.09 |
| `soft` | 6.80 | 6.29 | 5.54 |
| `nav` | 7.11 | 6.57 | 5.79 |
| `ink` | 9.13 | 8.45 | 7.44 |

Keep any new token above 4.5:1 on the ground it sits on.

## Type

Cormorant Garamond (Light, Light Italic, Regular) for display. Jost (Light, Regular, Medium) for UI and body. Body copy and eyebrows are set Medium for legibility; display headings stay Light.

Import both with the `latin-ext` subset — not the default `latin`. Mizo needs U+1E6D (ṭ) and U+1E6C (Ṭ), which live outside the default subset and will silently fall back mid-word.

Desktop scale after the type increase (the whole ramp was scaled a further 8%):

| Role | Size | Family |
| --- | --- | --- |
| Hero display | 101 | Cormorant Light Italic |
| Page title (stubs) | 87 | Cormorant Light |
| Section heading | 50 | Cormorant Light |
| Statement | 36 | Cormorant Light |
| Product / service name | 26.5–34 | Cormorant Light |
| Lead paragraph | 19 | Jost Medium |
| Body | 17.3 | Jost Medium |
| Nav | 13.5 | Jost Medium |
| Eyebrow / small caps | 13.5, tracked 2.4 | Jost Medium |

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