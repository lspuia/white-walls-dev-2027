export const NAV = [
  { href: "/profile", label: "Profile" },
  { href: "/interiors", label: "Interiors" },
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
] as const;

/** Header nav: Home is dropped — the logo is the home link. */
export const HEADER_NAV = NAV.filter((item) => item.href !== "/");

export const SOCIAL = [
  // TODO(owners): confirm the live handles before launch.
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.facebook.com/", label: "Facebook" },
] as const;

export const studio = {
  name: "White Walls",
  legalName: "White Walls Interior Design Studio",
  proprietor: "Liansangkimi Pachuau",
  city: "Aizawl, Mizoram",
  hours: "Monday–Saturday, 9:30–18:00",
  since: 2017,
  // WhatsApp number in E.164 without the +, as wa.me requires.
  whatsapp: "919362663457",
  // Primary address for mailto links; the Contact page lists both.
  email: "kimi@whitewalls.in",
} as const;

/**
 * Google Maps listing.
 *
 * `embedSrc` currently queries the listing by name and city. To pin it
 * exactly, open the listing in Google Maps → Share → Embed a map → copy the
 * iframe `src` and paste it here. Set it to `null` to fall back to the link
 * card alone.
 *
 * `link` is the owners' own share link for the White Walls listing
 * (Knowledge Graph id /g/11f5w_vn06).
 */
/** Contact details, supplied by the owners. */
export const contact = {
  address: {
    line1: "H.No. 141/3, Tuikual South",
    line2: "Aizawl, Mizoram, 796001",
  },
  /** `dial` is E.164 for tel:/wa.me; `display` is how it reads on the page.
   *  `whatsapp` marks which number backs studio.whatsapp — not shown on the page. */
  phones: [
    { dial: "+919362663457", display: "+91 93626 63457", whatsapp: true },
    { dial: "+919654956742", display: "+91 96549 56742", whatsapp: false },
    { dial: "+916909364955", display: "+91 69093 64955", whatsapp: false },
  ],
  emails: ["kimi@whitewalls.in", "puia@whitewalls.in"],
} as const;

/** One-line address, for map queries and structured data. */
export const addressLine = `${contact.address.line1}, ${contact.address.line2}`;

export const WHATSAPP_PREFILL =
  "Hello White Walls — I'd like to talk about a space. ";

export function whatsappHref(prefill: string = WHATSAPP_PREFILL): string {
  return `https://wa.me/${studio.whatsapp}?text=${encodeURIComponent(prefill)}`;
}

/**
 * Mizo copy is written by the owners and never machine-translated, so every
 * slot below stays `null` until Kim supplies the line. `<Mizo>` renders
 * nothing while a slot is null, so the English layout holds either way.
 */
export const mizo = {
  contactLead: null,
  // Supplied by the owners, verbatim.
  whatsappCta:
    "Whatsapp ah kan biak theih reng e, kan hman veleh kan rawn chhang ang che",
  footerAddress: null,
} satisfies Record<string, string | null>;

export const map = {
  /** Built from the real street address, so the pin is exact. To use the
   *  listing's own embed instead: Google Maps -> Share -> Embed a map ->
   *  paste the iframe `src` here. */
  embedSrc: `https://maps.google.com/maps?q=${encodeURIComponent(
    `White Walls Interior Design Studio, ${contact.address.line1}, ${contact.address.line2}`
  )}&z=16&output=embed`,
  link: "https://share.google/XyhQDv5xxVqVoWJfQ",
} as const;
