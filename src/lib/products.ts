/**
 * Products & dealerships.
 *
 * Facts sourced from CLAUDE.md: White Walls holds authorised dealerships for
 * Hettich and Brassage. Every other `teaser` / `body` string below is
 * PLACEHOLDER COPY awaiting the owners — no dealership, certification or
 * supply claim here should go live unverified.
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
};

export const PRODUCTS: Product[] = [
  {
    slug: "hettich",
    name: "Hettich",
    kind: "brand",
    tagline: "Kitchen & furniture hardware",
    teaser:
      "German kitchen and furniture hardware — hinges, drawer runners and sliding systems. White Walls is an authorised dealer, and Hettich systems sit behind most of the kitchens we build.",
    body: [
      "Hettich makes the moving parts of a kitchen: the hinges, the drawer runners, the lift systems and the sliding gear. They are the parts nobody looks at and everybody touches, several times a day, for years.",
      "We specify Hettich on most of our kitchens and carry the range as an authorised dealer, so the hardware is chosen at drawing stage rather than fitted to whatever arrives.",
    ],
  },
  {
    slug: "brassage",
    name: "Brassage",
    kind: "brand",
    tagline: "Custom brass ironmongery",
    teaser:
      "Custom brass ironmongery — handles, pulls and door furniture made to order. White Walls is an authorised dealer.",
    body: [
      "Brassage produces solid brass ironmongery to order: handles, pulls, hooks and door furniture, in a range of finishes that age rather than wear.",
      "Because the pieces are made to order, they are specified early and drawn into the cabinetry, not chosen at the end from what is in stock.",
    ],
  },
  {
    slug: "hafele",
    name: "Häfele",
    kind: "brand",
    tagline: "Fittings and appliances, supplied to order",
    teaser:
      "Fittings and appliances supplied to order. Placeholder — the studio will confirm the range and supply terms.",
    body: [
      "Häfele supplies furniture fittings, storage systems and appliances across a very wide catalogue.",
      "Placeholder. The studio will confirm which parts of the range it supplies and on what terms.",
    ],
  },
  {
    slug: "veneto",
    name: "Veneto",
    kind: "brand",
    tagline: "Surfaces and finishes",
    teaser:
      "Placeholder — surfaces and finishes. Copy for this brand is still to come from the studio.",
    body: [
      "Placeholder. This page is in place so the Veneto range has a home; the studio will supply the description, the product scope and the supply terms.",
    ],
  },
  {
    slug: "vmzinc",
    name: "VMZINC",
    kind: "brand",
    tagline: "Zinc cladding and roofing",
    teaser:
      "Zinc cladding and roofing systems. Placeholder — the studio will confirm the range and supply terms.",
    body: [
      "VMZINC produces rolled zinc for cladding and roofing, in a range of surface finishes that weather over time.",
      "Placeholder. The studio will confirm which systems it supplies and how they are specified into a project.",
    ],
  },
  {
    slug: "hardware",
    name: "Hardware",
    kind: "category",
    tagline: "Locks, handles and door furniture",
    teaser:
      "Locks, handles, hinges and door furniture, specified into the project rather than bought loose.",
    body: [
      "Hardware decides how a room feels every day — the weight of a handle, whether a door closes quietly, whether a drawer runs true.",
      "Placeholder. The studio will list the brands carried under this category and the supply terms.",
    ],
  },
  {
    slug: "glass-installations",
    name: "Glass Installations",
    kind: "category",
    tagline: "Partitions, screens and glazed panels",
    teaser:
      "Glazed partitions, screens and shower enclosures, measured and installed by the studio.",
    body: [
      "Glass is used to divide space without closing it — partitions, screens, shower enclosures and glazed panels.",
      "Placeholder. The studio will confirm the systems, the glass specifications and the installation scope.",
    ],
  },
  {
    slug: "electric-fireplaces",
    name: "Electric Fireplaces",
    kind: "category",
    tagline: "Electric, made to order",
    teaser:
      "Electric fireplaces, made to order and built into the cabinetry rather than stood in front of it.",
    body: [
      "Electric fireplaces are made to order and detailed into the surrounding cabinetry, so the unit reads as part of the room rather than an appliance placed in it.",
      "Placeholder. The studio will confirm the models offered and the lead times.",
    ],
  },
];

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
