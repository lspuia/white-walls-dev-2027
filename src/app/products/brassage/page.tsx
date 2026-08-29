import type { Metadata } from "next";
import Image from "next/image";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { productBySlug } from "@/lib/products";

const brassage = productBySlug("brassage")!;

export const metadata: Metadata = {
  title: "Brassage",
  description:
    "White Walls is an authorised Brassage dealer in Aizawl. Solid brass door and cabinet hardware, made to order in over thirty finishes.",
};

/** Their collections, grouped as their own site groups them. */
const COLLECTIONS = [
  {
    group: "Vintage & ornate",
    line: "Cast detail, deep relief, the look of a house with some history to it.",
    names: ["Edinburgh", "Mumtaz", "Amyra", "Cygnus", "Roshnara", "Volga", "Maurya"],
  },
  {
    group: "Neo-classic & transitional",
    line: "Quieter shapes that sit as easily in a new build as an old one.",
    names: ["Tuscan", "Leonardo", "Emperor", "Valencia", "Zoya", "Windsor"],
  },
  {
    group: "Modern & contemporary",
    line: "Plain forms, where the finish does the work.",
    names: ["Natali", "Kiah", "Bamboo", "Sphere", "Victoria", "Sleek"],
  },
] as const;

/** Over thirty finishes, grouped by family. */
const FINISHES = [
  {
    family: "Brass & gold",
    names: [
      "Polished brass",
      "Polished brass unlacquered",
      "Satin brass unlacquered",
      "Antique brass",
      "Antique brass matte",
      "Burnished brass",
      "Full gold",
      "Royal gold",
      "Antique gold",
      "Gold satin",
      "PVD gold",
    ],
  },
  {
    family: "Nickel & chrome",
    names: [
      "Polished nickel",
      "Brushed nickel",
      "Brushed nickel matte",
      "Satin nickel gold",
      "Black nickel",
      "Chrome plated",
      "Antique silver",
    ],
  },
  {
    family: "Bronze & copper",
    names: [
      "American bronze",
      "Oil-rubbed bronze",
      "Antique copper",
      "Antique copper matte",
      "Rose gold copper",
      "PVD rose gold",
      "Antique pewter",
    ],
  },
  {
    family: "Dark & specialist",
    names: ["Jet black", "Black nickel matte", "Silk appeal"],
  },
] as const;

export default function BrassagePage() {
  return (
    <>
      {/* Masthead — asymmetric, unlike the centred Hettich page. */}
      <section className="shell pt-[40px] pb-[var(--pad-y)] tab:pt-[52px]">
        <div className="grid items-center gap-[40px] desk:grid-cols-12 desk:gap-x-[56px]">
          <div className="desk:col-span-6">
            <PlaceholderImage ratio="4/5" label="Brassage lever on a panelled door" />
          </div>

          <div className="flex flex-col gap-[24px] desk:col-span-6">
            <div className="flex aspect-[3/2] w-full max-w-[300px] items-center justify-center border border-rule bg-white p-[26px]">
              <Image
                src={brassage.logo!.src}
                alt="Brassage logo"
                width={brassage.logo!.width}
                height={brassage.logo!.height}
                priority
                sizes="(min-width: 1200px) 300px, calc(100vw - 48px)"
                className="max-h-[64px] w-auto max-w-full object-contain"
              />
            </div>

            <p className="eyebrow tracking-[0.208em] text-bronze">
              Distinctive brass hardware since 1953
            </p>

            <h1 className="font-display text-[length:var(--text-contact)] font-light leading-[1.12] tracking-[-0.01em] text-ink">
              Solid brass, made to order.
            </h1>

            <p className="text-[length:var(--text-lead)] leading-[1.8] text-soft">
              Handles, levers, knobs, pulls, hinges and locks cast in solid
              brass — for doors, cabinetry, windows and bathrooms. Nothing is
              off the shelf: a piece is made in the collection and the finish
              you choose. We are an authorised dealer and take orders direct.
            </p>
          </div>
        </div>
      </section>

      {/* Collections — alternating rows, each group its own band. */}
      <section aria-labelledby="collections-heading" className="bg-sand py-[var(--pad-y)]">
        <div className="shell">
          <div className="flex flex-col items-center gap-[14px] pb-[56px] text-center">
            <p className="eyebrow tracking-[0.208em] text-bronze">Collections</p>
            <h2
              id="collections-heading"
              className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
            >
              Three houses of design
            </h2>
          </div>

          <div className="flex flex-col gap-[64px]">
            {COLLECTIONS.map((collection, i) => (
              <div
                key={collection.group}
                className="grid items-center gap-[32px] desk:grid-cols-12 desk:gap-x-[48px]"
              >
                <div
                  className={
                    i % 2 === 1
                      ? "desk:col-span-5 desk:col-start-8 desk:row-start-1"
                      : "desk:col-span-5"
                  }
                >
                  <PlaceholderImage ratio="3/2" label={collection.group} />
                </div>

                <div
                  className={`flex flex-col gap-[14px] ${
                    i % 2 === 1
                      ? "desk:col-span-6 desk:col-start-1 desk:row-start-1"
                      : "desk:col-span-6 desk:col-start-7"
                  }`}
                >
                  <h3 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
                    {collection.group}
                  </h3>
                  <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
                    {collection.line}
                  </p>
                  <ul className="mt-[6px] flex flex-wrap gap-x-[22px] gap-y-[8px]">
                    {collection.names.map((name) => (
                      <li
                        key={name}
                        className="font-display text-[length:var(--text-product)] font-light leading-[1.2] text-ink"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes — the signature of this brand, set typographically. */}
      <section aria-labelledby="finishes-heading" className="shell py-[var(--pad-y)]">
        <div className="flex flex-col items-center gap-[14px] pb-[48px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">Finishes</p>
          <h2
            id="finishes-heading"
            className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
          >
            Over thirty, on the same piece
          </h2>
          <p className="max-w-[620px] text-[length:var(--text-body)] leading-[1.82] text-soft">
            The shape is the collection; the finish is the decision. Unlacquered
            brass will darken with handling — that is the point of it. Ask us
            and we will show you the options against your door.
          </p>
        </div>

        <PlaceholderImage
          ratio="16/9"
          label="Finish samples laid out"
          className="mb-[56px] w-full"
        />

        <ul className="grid gap-x-[40px] gap-y-[44px] tab:grid-cols-2 desk:grid-cols-4">
          {FINISHES.map((finish) => (
            <li
              key={finish.family}
              className="flex flex-col gap-[12px] border-t border-rule pt-[20px]"
            >
              <h3 className="eyebrow tracking-[0.176em] text-bronze">
                {finish.family}
              </h3>
              <ul className="flex flex-col gap-[6px]">
                {finish.names.map((name) => (
                  <li
                    key={name}
                    className="text-[length:var(--text-body)] leading-[1.7] text-soft"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Darbaan — dark band. */}
      <section aria-labelledby="darbaan-heading" className="bg-near">
        <div className="shell grid items-center gap-[40px] py-[var(--pad-y)] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="desk:col-span-5">
            <PlaceholderImage ratio="3/4" label="Darbaan digital lock" />
          </div>
          <div className="flex flex-col gap-[20px] desk:col-span-6 desk:col-start-7">
            <p className="eyebrow tracking-[0.208em] text-brass">Darbaan</p>
            <h2
              id="darbaan-heading"
              className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] text-cream"
            >
              The lock, brought up to date
            </h2>
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-haze">
              Brassage&rsquo;s digital lock range — the brass body and detailing
              of the rest of the catalogue, with keypad, card and fingerprint
              entry inside it. For a front door that should still look like a
              front door.
            </p>
          </div>
        </div>
      </section>

      {/* Bespoke and buying */}
      <section className="shell py-[var(--pad-y)]">
        <div className="grid gap-[40px] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="flex flex-col gap-[16px] desk:col-span-6">
            <h2 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
              Bespoke
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              Brassage will make to a drawing. If a door needs a length or a
              backplate that is not in the catalogue, send us the measurements
              and we will put the enquiry through.
            </p>
          </div>

          <div className="flex flex-col gap-[16px] desk:col-span-6">
            <h2 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
              Buying from us
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              We hold an authorised Brassage dealership. Because every piece is
              made to order, tell us the collection, the finish and the
              quantities, and we will confirm the lead time with the quote.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppBand
        location="product-brassage"
        line="Ask us about Brassage."
        prefill="Hello White Walls — I'd like to ask about Brassage. "
      />
    </>
  );
}
