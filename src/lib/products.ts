/**
 * Products & dealerships.
 *
 * White Walls RETAILS these brands. They are not merely specified into the
 * studio's own projects — they are sold direct, and retail is intended to
 * become the larger share of income. Copy here must read that way.
 *
 * Facts sourced from CLAUDE.md: White Walls holds authorised dealerships for
 * Hettich and Brassage. Every other `teaser` / `body` string below is
 * PLACEHOLDER COPY awaiting the owners — no dealership, certification or
 * retail claim here should go live unverified.
 */

export type ProductKind = "brand" | "category";

export type Product = {
  slug: string;
  name: string;
  kind: ProductKind;
  /** Short line beneath the name, in the caption tier. */
  tagline: string;
  /** One paragraph on the Products index. */
  teaser: string;
  /** Body paragraphs on the inner page. */
  body: string[];
  /** Brand lockup for the Products index. Brands only. */
  logo?: { src: string; width: number; height: number };
  /** Category photograph for the Products index. Categories only. */
  photo?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "hettich",
    logo: {
      src: "/brand/products/hettich.webp",
      width: 400,
      height: 250,
    },
    name: "Hettich",
    kind: "brand",
    tagline: "Kitchen & furniture hardware",
    teaser:
      "German kitchen and furniture hardware — hinges, drawer runners and sliding systems. We are an authorised Hettich dealer and sell the range direct, whether or not we are designing the room.",
    body: [
      "Hettich makes the moving parts of a kitchen: the hinges, the drawer runners, the lift systems and the sliding gear. They are the parts nobody looks at and everybody touches, several times a day, for years.",
      "We hold an authorised Hettich dealership and sell the range direct — to builders, carpenters and homeowners, as well as into our own projects. Tell us the sizes and we will quote.",
    ],
  },
  {
    slug: "brassage",
    logo: {
      src: "/brand/products/brassage.webp",
      width: 400,
      height: 109,
    },
    name: "Brassage",
    kind: "brand",
    tagline: "Custom brass ironmongery",
    teaser:
      "Custom brass ironmongery — handles, pulls and door furniture made to order. We are an authorised dealer and take orders direct.",
    body: [
      "Brassage produces solid brass ironmongery to order: handles, pulls, hooks and door furniture, in a range of finishes that age rather than wear.",
      "We hold an authorised dealership and take orders direct, for your own project as readily as for ours. Because the pieces are made to order, lead times are confirmed when you order.",
    ],
  },
  {
    slug: "hafele",
    logo: {
      src: "/brand/products/hafele.webp",
      width: 400,
      height: 154,
    },
    name: "Häfele",
    kind: "brand",
    tagline: "Fittings and appliances, supplied to order",
    teaser:
      "Fittings and appliances sold to order. Placeholder — the studio will confirm the range and retail terms.",
    body: [
      "Häfele supplies furniture fittings, storage systems and appliances across a very wide catalogue.",
      "Placeholder. The studio will confirm which parts of the range it retails and on what terms.",
    ],
  },
  {
    slug: "veneto",
    logo: {
      src: "/brand/products/veneto.webp",
      width: 400,
      height: 348,
    },
    name: "Veneto",
    kind: "brand",
    tagline: "Surfaces and finishes",
    teaser:
      "Surfaces and finishes, stocked and sold by the studio. Placeholder — copy for this brand is still to come.",
    body: [
      "Placeholder. This page is in place so the Veneto range has a home; the studio will supply the description, the product scope and the retail terms.",
    ],
  },
  {
    slug: "vmzinc",
    logo: {
      src: "/brand/products/vmzinc.webp",
      width: 400,
      height: 128,
    },
    name: "VMZINC",
    kind: "brand",
    tagline: "Zinc cladding and roofing",
    teaser:
      "Zinc cladding and roofing systems, sold to order. Placeholder — the studio will confirm the range and retail terms.",
    body: [
      "VMZINC produces rolled zinc for cladding and roofing, in a range of surface finishes that weather over time.",
      "Placeholder. The studio will confirm which systems it retails and how they are supplied.",
    ],
  },
  {
    slug: "hardware",
    photo: "/img/categories/hardware.webp",
    name: "Hardware",
    kind: "category",
    tagline: "Locks, handles and door furniture",
    teaser:
      "Locks, handles, hinges and door furniture, sold over the counter as well as specified into projects.",
    body: [
      "Hardware decides how a room feels every day — the weight of a handle, whether a door closes quietly, whether a drawer runs true.",
      "Placeholder. The studio will list the brands carried under this category and the retail terms.",
    ],
  },
  {
    slug: "glass-installations",
    photo: "/img/categories/glass-installations.webp",
    name: "Glass Installations",
    kind: "category",
    tagline: "Partitions, screens and glazed panels",
    teaser:
      "Glazed partitions, screens and shower enclosures — supplied and installed, on our projects or on yours.",
    body: [
      "Glass is used to divide space without closing it — partitions, screens, shower enclosures and glazed panels.",
      "Placeholder. The studio will confirm the systems, the glass specifications and the installation scope.",
    ],
  },
  {
    slug: "electric-fireplaces",
    photo: "/img/categories/electric-fireplaces.webp",
    name: "Electric Fireplaces",
    kind: "category",
    tagline: "Electric, made to order",
    teaser:
      "Electric fireplaces, made to order and sold direct — built in where we are designing the room, or supplied as a unit.",
    body: [
      "Electric fireplaces are made to order. We detail them into the surrounding cabinetry where we are designing the room, and supply them as units where we are not.",
      "Placeholder. The studio will confirm the models offered and the lead times.",
    ],
  },
];

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
