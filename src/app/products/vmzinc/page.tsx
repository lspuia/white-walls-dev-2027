import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { productBySlug } from "@/lib/products";

const vmzinc = productBySlug("vmzinc")!;

export const metadata: Metadata = {
  title: "VMZINC",
  description:
    "VMZINC rolled zinc supplied by White Walls, Aizawl — standing seam and flat-lock roofing, rainscreen facades and rainwater systems, in Quartz-Zinc, Anthra-Zinc, Pigmento and Azengar. Supplied to order across Mizoram.",
};

/** VMZINC's surface aspects — the material's own vocabulary. */
const ASPECTS = [
  { name: "Natural zinc", line: "Bright when laid; weathers grey over a few years." },
  { name: "Quartz-Zinc", line: "Pre-weathered to a light matte grey from day one." },
  { name: "Anthra-Zinc", line: "Pre-weathered dark, close to charcoal." },
  { name: "Pigmento", line: "Pre-weathered and pigmented — red, blue, green, brown." },
  { name: "Pro-Zinc", line: "A lighter pre-weathered grey." },
  { name: "Azengar", line: "Engraved, non-reflective, almost white." },
] as const;

/** The systems, grouped by where they go on a building. */
const SYSTEMS = [
  {
    where: "Roofing",
    items: ["Standing seam", "Flat-lock panel", "Adeka", "Ornaments and dormers"],
  },
  {
    where: "Facades",
    items: [
      "Standing seam facade",
      "Flat-lock panel",
      "Interlocking panel",
      "Overlapping panel",
      "Sine wave profile",
      "Expanded mesh",
      "Perforation",
      "Mozaik",
      "Composite",
    ],
  },
  {
    where: "Rainwater",
    items: ["Gutters", "Downpipes", "Accessories and finishings"],
  },
] as const;

export default function VmzincPage() {
  return (
    <>
      {/* Masthead — type-led and left-aligned, with no image above it.
          A fifth opening again. */}
      <section className="shell pt-[48px] pb-[44px] tab:pt-[64px]">
        <p className="eyebrow tracking-[0.208em] text-bronze">
          Rolled zinc since 1837
        </p>
        <h1 className="mt-[20px] max-w-[1000px] font-display text-[length:var(--text-display)] font-light leading-[1.08] tracking-[-0.012em] text-ink">
          A roof that gets better at being a roof.
        </h1>
        <div aria-hidden className="mt-[32px] h-px w-full bg-rule" />

        <div className="mt-[32px] grid gap-[28px] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="desk:col-span-3">
            <div className="flex aspect-[3/2] w-full max-w-[260px] items-center justify-center border border-rule bg-white p-[22px]">
              <Image
                src={vmzinc.logo!.src}
                alt="VMZINC logo"
                width={vmzinc.logo!.width}
                height={vmzinc.logo!.height}
                priority
                sizes="(min-width: 1200px) 260px, calc(100vw - 48px)"
                className="max-h-[56px] w-auto max-w-full object-contain"
              />
            </div>
          </div>
          <p className="text-[length:var(--text-lead)] leading-[1.8] text-soft desk:col-span-8 desk:col-start-5">
            Zinc is a building-envelope material, not an interior one — the
            outer skin of a roof or a facade. Left alone it forms its own dull
            grey patina, which seals minor scratches and then largely stops
            changing. VMZINC has been rolling it since 1837. We supply the
            range to order.
          </p>
        </div>
      </section>

      <section className="shell pb-[var(--pad-y)]">
        <PlaceholderImage
          ratio="21/9"
          label="Standing seam zinc roof"
          className="w-full"
        />
      </section>

      {/* Surface aspects — the signature section for this material. */}
      <section aria-labelledby="aspects-heading" className="bg-sand py-[var(--pad-y)]">
        <div className="shell">
          <div className="flex flex-col items-center gap-[14px] pb-[52px] text-center">
            <p className="eyebrow tracking-[0.208em] text-bronze">
              Surface aspects
            </p>
            <h2
              id="aspects-heading"
              className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
            >
              Six ways zinc can arrive
            </h2>
            <p className="max-w-[660px] text-[length:var(--text-body)] leading-[1.82] text-soft">
              Natural zinc weathers on the building. The pre-weathered aspects
              arrive at the colour they will keep, which matters when a roof
              has to look settled from the day it goes on.
            </p>
          </div>

          <ul className="grid gap-x-[34px] gap-y-[40px] tab:grid-cols-2 desk:grid-cols-3">
            {ASPECTS.map((aspect) => (
              <li key={aspect.name} className="flex flex-col gap-[14px]">
                <PlaceholderImage ratio="4/3" label={aspect.name} />
                <h3 className="font-display text-[length:var(--text-product)] font-light leading-[1.2] text-ink">
                  {aspect.name}
                </h3>
                <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                  {aspect.line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Systems, by where they go */}
      <section aria-labelledby="systems-heading" className="shell py-[var(--pad-y)]">
        <div className="flex flex-col items-center gap-[14px] pb-[48px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">Systems</p>
          <h2
            id="systems-heading"
            className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
          >
            Where it goes on the building
          </h2>
        </div>

        <div className="grid gap-[44px] desk:grid-cols-3 desk:gap-x-[48px]">
          {SYSTEMS.map((system) => (
            <div
              key={system.where}
              className="flex flex-col gap-[16px] border-t border-rule pt-[22px]"
            >
              <h3 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
                {system.where}
              </h3>
              <ul className="flex flex-col gap-[8px]">
                {system.items.map((item) => (
                  <li
                    key={item}
                    className="text-[length:var(--text-body)] leading-[1.7] text-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why zinc */}
      <section aria-labelledby="why-heading" className="bg-near">
        <div className="shell grid items-center gap-[40px] py-[var(--pad-y)] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="flex flex-col gap-[20px] desk:col-span-6">
            <p className="eyebrow tracking-[0.208em] text-brass">The material</p>
            <h2
              id="why-heading"
              className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] text-cream"
            >
              It outlasts the decision
            </h2>
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-haze">
              Zinc roofs measured in decades rather than years, and the patina
              is the maintenance — it re-forms over a scratch on its own. At the
              end of all that the metal is fully recyclable, and VMZINC
              publishes environmental declarations for the range.
            </p>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-haze">
              It is worth saying plainly: this is a heavy, specified building
              material with real lead times, not something we keep by the door.
            </p>
          </div>
          <div className="desk:col-span-5 desk:col-start-8">
            <PlaceholderImage ratio="3/4" label="Weathered zinc facade" />
          </div>
        </div>
      </section>

      {/* Buying */}
      <section className="shell py-[var(--pad-y)]">
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-[18px] text-center">
          <h2 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
            Buying from us
          </h2>
          <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
            Send the drawings, the areas and the system you have in mind — or
            just describe the building and we will work it through with you. We
            will come back with quantities, the surface aspect, a lead time and
            a price. Delivery anywhere in Mizoram.
          </p>
          <Link
            href="/products"
            className="eyebrow mt-[6px] tracking-[0.176em] text-bronze underline decoration-dotted decoration-1 underline-offset-[6px] transition-colors hover:text-ink"
          >
            All products
          </Link>
        </div>
      </section>

      <WhatsAppBand
        location="product-vmzinc"
        line="Ask us about VMZINC."
        prefill="Hello White Walls — I'd like to ask about VMZINC zinc roofing and cladding. "
      />
    </>
  );
}
