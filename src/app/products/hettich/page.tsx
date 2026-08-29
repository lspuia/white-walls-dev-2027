import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { productBySlug } from "@/lib/products";

const hettich = productBySlug("hettich")!;

export const metadata: Metadata = {
  title: "Hettich",
  description:
    "White Walls is an authorised Hettich dealer in Aizawl. Hinges, drawer systems, runners, sliding gear, lift systems and kitchen and wardrobe fittings — supplied direct to homeowners across Mizoram.",
};

/** The families we supply, with Hettich's own system names beneath each. */
const FAMILIES = [
  {
    name: "Furniture hinges",
    line: "The joint every cabinet door turns on.",
    items: ["Sensys", "Intermat", "Onsys", "Veosys", "Slide-On"],
  },
  {
    name: "Drawer systems",
    line: "Full boxes, built to run true when loaded.",
    items: ["AvanTech YOU", "ArciTech", "InnoTech Atira", "InnoTech"],
  },
  {
    name: "Runners & channels",
    line: "Undermount and telescopic, silent or push-to-open.",
    items: ["Quadro undermount", "Telescopic silent", "Push-to-open", "FR runners"],
  },
  {
    name: "Sliding & folding",
    line: "Doors that move instead of swing.",
    items: [
      "Top-running systems",
      "Bottom-running systems",
      "Sliding-folding",
      "Room dividers",
    ],
  },
  {
    name: "Lift & flap systems",
    line: "For overhead doors that stay where you put them.",
    items: ["LiftEase M", "LiftEase H", "Flap stays", "Lift-up top box"],
  },
  {
    name: "Kitchen storage",
    line: "The fittings that decide how a kitchen actually works.",
    items: [
      "Pull-out cabinet units",
      "Corner storage",
      "Waste bin systems",
      "Wire baskets",
    ],
  },
  {
    name: "Wardrobe fittings",
    line: "Storage that earns the depth it takes.",
    items: [
      "Pull-out shoe racks",
      "Garment lifts",
      "Cargo laundry",
      "Ironing boards",
    ],
  },
  {
    name: "Door hardware",
    line: "Beyond the cabinetry — the doors of the house.",
    items: ["Door hinges", "Door closers", "Floor springs", "Mortise locks"],
  },
] as const;

/** Flagship systems, set as a quiet typographic run. */
const SYSTEMS = [
  "AvanTech YOU",
  "ArciTech",
  "InnoTech Atira",
  "Sensys",
  "SlideLine",
  "Quadro",
] as const;

export default function HettichPage() {
  return (
    <>
      {/* Masthead */}
      <section className="bg-bone pt-[40px] pb-[56px] tab:pt-[52px] tab:pb-[72px]">
        <div className="shell flex flex-col items-center gap-[28px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">
            Authorised dealer
          </p>

          <div className="flex aspect-[3/2] w-full max-w-[330px] items-center justify-center border border-rule bg-white p-[28px]">
            <Image
              src={hettich.logo!.src}
              alt="Hettich logo"
              width={hettich.logo!.width}
              height={hettich.logo!.height}
              priority
              sizes="(min-width: 834px) 330px, calc(100vw - 48px)"
              className="max-h-[84px] w-auto max-w-full object-contain"
            />
          </div>

          <h1 className="max-w-[820px] font-display text-[length:var(--text-contact)] font-light leading-[1.12] tracking-[-0.01em] text-ink">
            The parts you touch every day.
          </h1>

          <p className="max-w-[720px] text-[length:var(--text-lead)] leading-[1.8] text-soft">
            Hettich makes the moving parts of a kitchen and a wardrobe — the
            hinges, the runners, the sliding gear and the lift systems. German
            engineering, and the reason a drawer still closes softly ten years
            in. We supply the range direct to homeowners across Mizoram, and we
            ship.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="relative bg-near">
        <div aria-hidden className="absolute inset-0 overflow-hidden">
          <PlaceholderImage
            label="Hettich hinge detail"
            showLabel={false}
            className="h-full w-full"
          />
          {/* Heavy scrim: the quote has to clear contrast over whatever
              photograph eventually sits here. Re-measure when it lands. */}
          <div className="absolute inset-0 bg-[rgba(20,18,15,0.82)]" />
        </div>
        <div className="shell relative flex justify-center py-[84px] tab:py-[110px]">
          <blockquote className="max-w-[900px] text-center font-display text-[length:var(--text-quote)] font-light italic leading-[1.5] text-cream">
            Nobody compliments a hinge. They notice the door that drops, the
            drawer that sticks, the handle that works loose. Hardware is the
            part of a room you only meet when it fails.
          </blockquote>
        </div>
      </section>

      {/* What we supply */}
      <section aria-labelledby="families-heading" className="shell pt-[var(--pad-y)]">
        <div className="flex flex-col items-center gap-[14px] pb-[52px] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">The range</p>
          <h2
            id="families-heading"
            className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
          >
            What we supply from Hettich
          </h2>
          <p className="max-w-[620px] text-[length:var(--text-body)] leading-[1.82] text-soft">
            Tell us the cabinet sizes, or send a drawing, and we will quote the
            fittings to suit.
          </p>
        </div>

        <PlaceholderImage
          ratio="16/9"
          label="Hettich fittings in a finished kitchen"
          className="mb-[56px] w-full"
        />

        <ul className="grid gap-x-[40px] gap-y-[48px] tab:grid-cols-2 desk:grid-cols-3">
          {FAMILIES.map((family) => (
            <li
              key={family.name}
              className="flex flex-col gap-[12px] border-t border-rule pt-[22px]"
            >
              <h3 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
                {family.name}
              </h3>
              <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                {family.line}
              </p>
              <ul className="mt-[6px] flex flex-col gap-[6px]">
                {family.items.map((item) => (
                  <li
                    key={item}
                    className="text-[length:var(--text-body)] leading-[1.7] text-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Flagship systems */}
      <section aria-labelledby="systems-heading" className="mt-[var(--pad-y)] bg-sand">
        <div className="shell flex flex-col items-center gap-[10px] py-[var(--pad-y)] text-center">
          <p className="eyebrow tracking-[0.208em] text-bronze">
            Systems by name
          </p>
          <h2
            id="systems-heading"
            className="sr-only"
          >
            Hettich systems we supply
          </h2>
          <ul className="mt-[18px] flex flex-wrap items-center justify-center gap-x-[40px] gap-y-[18px]">
            {SYSTEMS.map((system) => (
              <li
                key={system}
                className="font-display text-[length:var(--text-service)] font-light leading-[1.2] text-ink"
              >
                {system}
              </li>
            ))}
          </ul>
          <p className="mt-[24px] max-w-[620px] text-[length:var(--text-body)] leading-[1.82] text-soft">
            Ask for a system by name, or describe the room and we will specify
            it for you.
          </p>

          <div className="mt-[44px] grid w-full gap-[24px] tab:grid-cols-2">
            <PlaceholderImage ratio="4/3" label="AvanTech YOU drawer" />
            <PlaceholderImage ratio="4/3" label="Sensys hinge" />
          </div>
        </div>
      </section>

      {/* In the work */}
      <section className="shell py-[var(--pad-y)]">
        <div className="grid gap-[40px] desk:grid-cols-12 desk:gap-x-[40px]">
          <div className="desk:col-span-7">
            <PlaceholderImage ratio="4/3" label="Hettich drawer system" />
          </div>
          <div className="flex flex-col justify-center gap-[20px] desk:col-span-5">
            <h2 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
              Buying from us
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              We hold an authorised Hettich dealership. You do not need to be a
              design client — send a list, a drawing, or the cabinet dimensions
              and we will quote against the current range.
            </p>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              Orders ship anywhere in Mizoram. Where we are designing the room
              as well, the hardware is chosen at drawing stage rather than
              fitted to whatever arrives.
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
        location="product-hettich"
        line="Ask us about Hettich."
        prefill="Hello White Walls — I'd like to ask about Hettich. "
      />
    </>
  );
}
