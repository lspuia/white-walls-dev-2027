import type { Metadata } from "next";
import Image from "next/image";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { productBySlug } from "@/lib/products";

const blum = productBySlug("blum")!;

export const metadata: Metadata = {
  title: "Blum",
  description:
    "Blum furniture hardware supplied by White Walls, Aizawl — CLIP top hinges, LEGRABOX and MERIVOBOX drawer systems, MOVENTO runners, AVENTOS lift systems, and BLUMOTION, TIP-ON and SERVO-DRIVE motion technology.",
};

/** Blum's motion technologies — the idea the whole catalogue turns on. */
const MOTION = [
  {
    name: "BLUMOTION",
    line: "Damps a door or drawer over the last stretch, so it closes quietly however hard it was pushed.",
  },
  {
    name: "TIP-ON",
    line: "Mechanical touch release, for handleless fronts. Press, and it opens.",
  },
  {
    name: "TIP-ON BLUMOTION",
    line: "The two together — opens at a touch, closes damped.",
  },
  {
    name: "SERVO-DRIVE",
    line: "Electric opening, for the drawers a full hand cannot reach.",
  },
] as const;

/** The systems, as Blum groups them. */
const SYSTEMS = [
  { group: "Box systems", items: ["LEGRABOX", "MERIVOBOX", "TANDEMBOX antaro"] },
  { group: "Runner systems", items: ["MOVENTO", "TANDEM"] },
  { group: "Hinge systems", items: ["CLIP top BLUMOTION", "CLIP top", "MODUL"] },
  {
    group: "Lift systems",
    items: ["AVENTOS HF", "AVENTOS HS", "AVENTOS HL", "AVENTOS HK top", "AVENTOS HK-S", "AVENTOS HK-XS"],
  },
  { group: "Inner dividing", items: ["AMBIA-LINE", "ORGA-LINE"] },
  {
    group: "Cabinet applications",
    items: ["SPACE TOWER", "SPACE CORNER", "SPACE STEP", "SPACE TWIN", "Sink cabinet"],
  },
  { group: "Pocket systems", items: ["REVEGO"] },
] as const;

export default function BlumPage() {
  return (
    <>
      {/* Masthead — logo and heading share a line, unlike the other pages. */}
      <section className="shell pt-[44px] pb-[52px] tab:pt-[56px]">
        <div className="grid items-center gap-[28px] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="desk:col-span-4">
            <div className="flex aspect-[2/1] w-full max-w-[240px] items-center justify-center overflow-hidden border border-rule">
              <Image
                src={blum.logo!.src}
                alt="Blum logo"
                width={blum.logo!.width}
                height={blum.logo!.height}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-[18px] desk:col-span-8">
            <p className="eyebrow tracking-[0.208em] text-bronze">
              Furniture fittings from Austria
            </p>
            <h1 className="font-display text-[length:var(--text-contact)] font-light leading-[1.12] tracking-[-0.01em] text-ink">
              Everything here is about how it moves.
            </h1>
          </div>
        </div>

        <p className="mt-[32px] max-w-[820px] text-[length:var(--text-lead)] leading-[1.8] text-soft">
          Blum makes the parts of a kitchen that move — the hinge a door turns
          on, the drawer box and the runner beneath it, and the lift that holds
          an overhead front open where you left it. We supply the range to
          order.
        </p>
      </section>

      {/* Motion first: the idea before the catalogue. */}
      <section aria-labelledby="motion-heading" className="bg-near">
        <div className="shell py-[var(--pad-y)]">
          <div className="flex flex-col items-center gap-[14px] pb-[52px] text-center">
            <p className="eyebrow tracking-[0.208em] text-brass">
              Motion technologies
            </p>
            <h2
              id="motion-heading"
              className="max-w-[820px] font-display text-[length:var(--text-heading)] font-light leading-[1.16] text-cream"
            >
              A drawer you never have to slam
            </h2>
            <p className="max-w-[660px] text-[length:var(--text-body)] leading-[1.82] text-haze">
              These are not products in themselves — they are fitted into the
              hinges, boxes and lifts below, and they are what most people
              actually notice about a Blum kitchen.
            </p>
          </div>

          <ul className="grid gap-x-[34px] gap-y-[36px] tab:grid-cols-2 desk:grid-cols-4">
            {MOTION.map((tech) => (
              <li
                key={tech.name}
                className="flex flex-col gap-[12px] border-t border-soft pt-[20px]"
              >
                <h3 className="eyebrow tracking-[0.176em] text-brass">
                  {tech.name}
                </h3>
                <p className="text-[length:var(--text-body)] leading-[1.8] text-haze">
                  {tech.line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The systems, as a two-column list rather than a card grid. */}
      <section aria-labelledby="systems-heading" className="shell py-[var(--pad-y)]">
        <div className="flex flex-col items-center gap-[14px] pb-[48px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">The range</p>
          <h2
            id="systems-heading"
            className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
          >
            What we supply from Blum
          </h2>
        </div>

        <dl className="flex flex-col">
          {SYSTEMS.map((system) => (
            <div
              key={system.group}
              className="grid gap-[10px] border-t border-rule py-[26px] desk:grid-cols-12 desk:gap-x-[40px]"
            >
              <dt className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink desk:col-span-4">
                {system.group}
              </dt>
              <dd className="desk:col-span-8">
                <ul className="flex flex-wrap gap-x-[22px] gap-y-[8px]">
                  {system.items.map((item) => (
                    <li
                      key={item}
                      className="text-[length:var(--text-body)] leading-[1.7] text-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Buying */}
      <section className="shell pb-[var(--pad-y)]">
        <div className="grid items-center gap-[40px] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="desk:col-span-6">
            <PlaceholderImage ratio="4/3" label="LEGRABOX drawer" />
          </div>
          <div className="flex flex-col gap-[18px] desk:col-span-5 desk:col-start-8">
            <h2 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
              Buying from us
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              Tell us the cabinet sizes, or send a drawing, and we will quote
              the fittings to suit — including which motion technology to put
              behind them. You do not need to be a design client.
            </p>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              Where we are designing the kitchen, the hardware is chosen at
              drawing stage: box height, runner length and hinge type all set
              the carcass before it is cut.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppBand
        location="product-blum"
        line="Ask us about Blum."
        prefill="Hello White Walls — I'd like to ask about Blum. "
      />
    </>
  );
}
