import type { Metadata } from "next";
import Image from "next/image";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { productBySlug } from "@/lib/products";

const hafele = productBySlug("hafele")!;

export const metadata: Metadata = {
  title: "Häfele Appliances",
  description:
    "Häfele kitchen appliances supplied by White Walls, Aizawl — hobs, hoods, ovens, dishwashers and built-in coffee machines, delivered across Mizoram. Appliances only.",
};

const LARGE = [
  "Hobs",
  "Induction hobs",
  "Chimney hoods",
  "Microwaves & ovens",
  "Dishwashers",
  "Built-in coffee machines",
  "Washers & dryers",
] as const;

const SMALL = [
  "Induction cooktops",
  "Coffee machines",
  "Air fryers",
  "Juicers",
  "Kettles",
  "Hand blenders",
  "Kitchen machines",
  "Toasters",
  "Sandwich makers",
] as const;

export default function HafelePage() {
  return (
    <>
      {/* Cover — image first, title beneath. A third shape again: Hettich is
          centred and systematic, Brassage asymmetric, this one a cover. */}
      <section className="pt-[24px] tab:pt-[32px]">
        <div className="shell">
          <PlaceholderImage
            ratio="21/9"
            label="Häfele hob and hood in a fitted kitchen"
            className="w-full"
          />
        </div>

        <div className="shell grid items-end gap-[28px] pt-[40px] pb-[var(--pad-y)] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="desk:col-span-7">
            <p className="eyebrow tracking-[0.208em] text-bronze">
              Appliances only
            </p>
            <h1 className="mt-[18px] font-display text-[length:var(--text-contact)] font-light leading-[1.12] tracking-[-0.01em] text-ink">
              The machines behind the cabinetry.
            </h1>
          </div>

          <div className="flex flex-col gap-[22px] desk:col-span-5">
            <div className="flex aspect-[3/2] w-full max-w-[280px] items-center justify-center border border-rule bg-white p-[24px]">
              <Image
                src={hafele.logo!.src}
                alt="Häfele logo"
                width={hafele.logo!.width}
                height={hafele.logo!.height}
                priority
                sizes="(min-width: 1200px) 280px, calc(100vw - 48px)"
                className="max-h-[60px] w-auto max-w-full object-contain"
              />
            </div>
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-soft">
              Häfele has been in India for over two decades, part of the global
              Häfele group. We supply their kitchen appliances — and only their
              appliances, not the wider fittings catalogue.
            </p>
          </div>
        </div>
      </section>

      {/* The range — large against small, side by side. */}
      <section aria-labelledby="range-heading" className="bg-sand py-[var(--pad-y)]">
        <div className="shell">
          <div className="flex flex-col items-center gap-[14px] pb-[52px] text-center">
            <p className="eyebrow tracking-[0.208em] text-bronze">The range</p>
            <h2
              id="range-heading"
              className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] tracking-[-0.006em] text-ink"
            >
              Built in, and on the counter
            </h2>
          </div>

          <div className="grid gap-[48px] desk:grid-cols-2 desk:gap-x-[64px]">
            <div className="flex flex-col gap-[20px] border-t border-rule pt-[24px]">
              <h3 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
                Large &amp; built-in
              </h3>
              <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                Planned into the cabinetry at drawing stage.
              </p>
              <ul className="mt-[4px] grid grid-cols-1 gap-[10px] tab:grid-cols-2">
                {LARGE.map((item) => (
                  <li
                    key={item}
                    className="text-[length:var(--text-body)] leading-[1.7] text-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-[20px] border-t border-rule pt-[24px]">
              <h3 className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink">
                Small appliances
              </h3>
              <p className="text-[length:var(--text-caption)] leading-[1.68] text-mute">
                Bought on their own, no cabinetry required.
              </p>
              <ul className="mt-[4px] grid grid-cols-1 gap-[10px] tab:grid-cols-2">
                {SMALL.map((item) => (
                  <li
                    key={item}
                    className="text-[length:var(--text-body)] leading-[1.7] text-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built in, not added on */}
      <section aria-labelledby="fit-heading" className="shell py-[var(--pad-y)]">
        <div className="grid items-center gap-[40px] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="flex flex-col gap-[20px] desk:col-span-5">
            <h2
              id="fit-heading"
              className="font-display text-[length:var(--text-service)] font-light leading-[1.18] text-ink"
            >
              Decide the appliance first
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              A built-in oven, a hob and a hood each set a cut-out, a clearance
              and a service point. Choose them after the cabinetry is made and
              something gets compromised — usually the fit, sometimes the
              extraction.
            </p>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              Where we are designing the kitchen, the appliances are settled
              before the joinery is cut. Where we are not, send us the model
              numbers and we will supply to suit.
            </p>
          </div>
          <div className="desk:col-span-6 desk:col-start-7">
            <PlaceholderImage ratio="4/3" label="Built-in oven and hob" />
          </div>
        </div>
      </section>

      {/* Service — the argument that matters at this distance. */}
      <section aria-labelledby="service-heading" className="bg-near">
        <div className="shell grid items-center gap-[40px] py-[var(--pad-y)] desk:grid-cols-12 desk:gap-x-[48px]">
          <div className="desk:col-span-5">
            <PlaceholderImage ratio="3/2" label="Häfele appliance detail" />
          </div>
          <div className="flex flex-col gap-[20px] desk:col-span-6 desk:col-start-7">
            <p className="eyebrow tracking-[0.208em] text-brass">After the sale</p>
            <h2
              id="service-heading"
              className="font-display text-[length:var(--text-heading)] font-light leading-[1.16] text-cream"
            >
              An appliance is a ten-year relationship
            </h2>
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-haze">
              A dishwasher is not a purchase so much as a decade of small
              obligations — a seal, a filter, a board. Häfele runs a service
              network across India, which is the part of the decision that
              matters most from this far east.
            </p>
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
            Tell us the model, or tell us the kitchen and we will suggest one.
            You do not need to be a design client. Orders ship anywhere in
            Mizoram, and where the appliance is built in we can fit it as part
            of the work.
          </p>
        </div>
      </section>

      <WhatsAppBand
        location="product-hafele"
        line="Ask us about Häfele appliances."
        prefill="Hello White Walls — I'd like to ask about Häfele appliances. "
      />
    </>
  );
}
