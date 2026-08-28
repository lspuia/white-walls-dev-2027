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
  gstin: "15BABPP7051A1Z6",
  proprietor: "Liansangkimi Pachuau",
  city: "Aizawl, Mizoram",
  hours: "Monday–Saturday, 9:30–18:00",
  since: 2017,
  // TODO(owners): replace with the studio's live WhatsApp number (E.164, no +).
  whatsapp: "919000000000",
  // TODO(owners): replace with the studio's live address.
  email: "hello@whitewalls.in",
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
export const map = {
  embedSrc:
    "https://maps.google.com/maps?q=White+Walls+Aizawl+Mizoram&z=15&output=embed",
  link: "https://share.google/XyhQDv5xxVqVoWJfQ",
} as const;

/**
 * Contact details. `address` and `phone` stay null until the owners supply
 * them — nothing invented for a real business. Each renders only once set.
 */
export const contact = {
  address: null as string | null,
  phone: null as string | null,
} satisfies { address: string | null; phone: string | null };

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
