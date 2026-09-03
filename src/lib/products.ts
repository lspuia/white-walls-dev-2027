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
      "We hold an authorised Hettich dealership and sell the range direct — to homeowners across Mizoram as well as to builders and carpenters. Tell us the sizes and we will quote, and we ship.",
    ],
  },
  {
    slug: "blum",
    logo: {
      src: "/brand/products/blum.svg",
      width: 100,
      height: 50,
    },
    name: "Blum",
    kind: "brand",
    tagline: "Furniture fittings and motion technology",
    teaser:
      "Austrian furniture hardware — hinges, box systems, runners and lift systems, and the motion technology that closes them softly or opens them at a touch. Supplied to order.",
    body: [
      "Blum makes the parts of a kitchen that move: the hinge a door turns on, the drawer box and the runner beneath it, and the lift that holds an overhead front open where you left it.",
      "Motion is the point of the catalogue. BLUMOTION damps a door or drawer closed, TIP-ON opens a handleless front at a push, and SERVO-DRIVE opens it electrically.",
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
    tagline: "Built-in kitchen appliances",
    teaser:
      "Built-in kitchen appliances, sold to order. Appliances are the part of the Häfele catalogue we deal in.",
    body: [
      "Häfele's appliance range covers the built-in equipment of a kitchen — the machines that sit behind and under the cabinetry rather than beside it.",
      "We deal in Häfele appliances only, not the wider fittings catalogue. Placeholder: the studio will confirm the models offered and the retail terms.",
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
    tagline: "Custom modular wardrobes",
    teaser:
      "Custom modular wardrobes and storage — sliding, walk-in and openable, plus glass doors, partitions and shelving. Made to the room.",
    body: [
      "Veneto makes custom modular wardrobes and storage for Indian homes — sliding, walk-in and openable wardrobes, framed glass doors, room partitions and shelving, each built to the measured opening rather than to a standard carcass.",
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
    tagline: "Rolled zinc for roofs and facades",
    teaser:
      "Rolled zinc for roofs, facades and rainwater — standing seam, flat-lock and interlocking panels, in the weathered surface aspects zinc is known for. Supplied to order.",
    body: [
      "VMZINC produces rolled zinc for cladding and roofing, in a range of surface finishes that weather over time.",
      "VMZINC has rolled zinc since 1837. It is a building-envelope material rather than an interior one: a roof or a facade skin that weathers to a matte grey and lasts for decades.",
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
