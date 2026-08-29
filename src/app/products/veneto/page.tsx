import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { productBySlug } from "@/lib/products";

const veneto = productBySlug("veneto")!;

export const metadata: Metadata = {
  title: "Veneto",
  description:
    "Veneto custom modular wardrobes supplied by White Walls, Aizawl — sliding, walk-in and openable wardrobes, framed glass doors, room partitions and shelving, made to the measured opening.",
};

/** Their six types, with the designs their site names under each. */
const TYPES = [
  {
    n: "01",
    name: "Sliding wardrobes",
    line: "Where a swing door would take floor the room has not got.",
    designs: ["Cronos", "Helios", "Zeus", "Ares"],
  },
  {
    n: "02",
    name: "Walk-in wardrobes",
    line: "A room given over to storage, rather than a wall of it.",
    designs: ["Ops", "Nox", "Sors", "Era", "Elektra"],
  },
  {
    n: "03",
    name: "Openable wardrobes",
    line: "The full front, opened at once — still the best way to see everything.",
    designs: ["Gaia", "Kratos", "Dior", "Mia"],
  },
  {
    n: "04",
    name: "Framed glass doors",
    line: "Slim frames and glass, for a wardrobe that does not read as a wall.",
    designs: ["Iris", "Aeolus", "Gino", "Slim", "Toro", "Arca", "Glax", "Donata", "Elda", "Aldo"],
  },
  {
    n: "05",
    name: "Room partitions",
    line: "Dividing a space without building in it.",
    designs: ["Venti", "Vesta", "Apollo", "Aria"],
  },
  {
    n: "06",
    name: "Shelving",
    line: "Open storage, where a door would be one thing too many.",
    designs: ["Spice", "Silvio", "Elektra"],
  },
] as const;

export default function VenetoPage() {
  return (
    <>
      {/* Full-bleed hero — the fourth distinct opening: Hettich centred,
          Brassage split, Häfele a cover, this one overlaid. */}
      <section data-scrim-hero className="relative">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <PlaceholderImage
            label="Veneto walk-in wardrobe"
            showLabel={false}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-[rgba(20,18,15,0.74)]" />
        </div>

        <div className="shell relative flex min-h-[420px] flex-col items-center justify-center gap-[24px] py-[96px] text-center tab:min-h-[520px]">
          <div className="flex aspect-[3/2] w-full max-w-[260px] items-center justify-center border border-rule bg-white p-[22px]">
            <Image
              src={veneto.logo!.src}
              alt="Veneto logo"
              width={veneto.logo!.width}
              height={veneto.logo!.height}
              priority
              sizes="(min-width: 834px) 260px, calc(100vw - 48px)"
              className="max-h-[64px] w-auto max-w-full object-contain"
            />
          </div>

          <h1 className="max-w-[860px] font-display text-[length:var(--text-contact)] font-light leading-[1.12] tracking-[-0.01em] text-cream">
            Wardrobes built to the wall you have.
          </h1>

          <p className="max-w-[680px] text-[length:var(--text-lead)] leading-[1.8] text-cream">
            Custom modular wardrobes and storage, made to the measured opening
            rather than to a standard carcass. We supply the range across
            Mizoram.
          </p>
        </div>
      </section>

      {/* Typology — a numbered index, unlike the grids on the other pages. */}
      <section aria-labelledby="types-heading" className="shell py-[var(--pad-y)]">
        <div className="flex flex-col items-center gap-[14px] pb-[56px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">The range</p>
          <h2
            id="types-heading"
            className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
          >
            Six ways to store a room
          </h2>
        </div>

        <ol className="flex flex-col">
          {TYPES.map((type) => (
            <li
              key={type.n}
              className="grid gap-[10px] border-t border-rule py-[34px] desk:grid-cols-12 desk:gap-x-[40px]"
            >
              <p className="eyebrow tracking-[0.176em] text-bronze desk:col-span-1">
                {type.n}
              </p>

              <div className="desk:col-span-4">
                <h3 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
                  {type.name}
                </h3>
                <p className="mt-[8px] text-[length:var(--text-caption)] leading-[1.68] text-mute">
                  {type.line}
                </p>
              </div>

              <ul className="flex flex-wrap gap-x-[20px] gap-y-[8px] desk:col-span-7 desk:items-start">
                {type.designs.map((design) => (
                  <li
                    key={design}
                    className="font-display text-[length:var(--text-product)] font-light leading-[1.3] text-soft"
                  >
                    {design}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* Made to the room */}
      <section aria-labelledby="made-heading" className="bg-sand py-[var(--pad-y)]">
        <div className="shell grid items-center gap-[40px] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="desk:col-span-6">
            <PlaceholderImage ratio="3/2" label="Sliding wardrobe in a bedroom" />
          </div>
          <div className="flex flex-col gap-[20px] desk:col-span-5 desk:col-start-8">
            <h2
              id="made-heading"
              className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink"
            >
              Measured, then made
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              Modular does not mean standard here. The design is chosen from the
              range; the carcass, the internals and the door heights are cut to
              the opening — which is what makes it sit flush to a wall that is
              never quite square.
            </p>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              Veneto builds under an ISO 9001:2015 certified process, out of
              Maharashtra, and delivers across India.
            </p>
          </div>
        </div>
      </section>

      {/* Buying */}
      <section className="shell py-[var(--pad-y)]">
        <div className="grid gap-[40px] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="desk:col-span-5">
            <PlaceholderImage ratio="4/3" label="Framed glass wardrobe door" />
          </div>
          <div className="flex flex-col gap-[16px] desk:col-span-6 desk:col-start-7">
            <h2 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
              Buying from us
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              Send the room dimensions, or let us measure. We will suggest a
              design from the range, confirm the internals, and quote with the
              lead time — every piece is made to order.
            </p>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              You do not need to be a design client. Orders ship anywhere in
              Mizoram, and we can fit as part of the work.
            </p>
            <Link
              href="/products"
              className="eyebrow mt-[6px] self-start tracking-[0.176em] text-bronze underline decoration-dotted decoration-1 underline-offset-[6px] transition-colors hover:text-ink"
            >
              All products
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppBand
        location="product-veneto"
        line="Ask us about Veneto."
        prefill="Hello White Walls — I'd like to ask about Veneto wardrobes. "
      />
    </>
  );
}
