import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";

export const metadata: Metadata = {
  title: "Interiors",
  description:
    "Selected residential and commercial interiors by White Walls, across Aizawl and Mizoram.",
};

/* The first four are the projects named in the Figma gallery frame; the rest
   are open slots. All are placeholders until the photography lands. */
const INTERIORS = [
  "Chaltlang Residence",
  "Zarkawt Café & Bar",
  "Ramhlun Kitchen",
  "Bawngkawn Apartment",
  "Project 05",
  "Project 06",
  "Project 07",
  "Project 08",
  "Project 09",
] as const;

export default function InteriorsPage() {
  return (
    <>
      <PageTitle eyebrow="Selected work" title="Interiors" />

      {/* Centred intro, narrow measure. */}
      <section className="bg-bone pb-[64px] tab:pb-[72px]">
        <div className="shell flex justify-center">
          <p className="max-w-[820px] text-center text-[length:var(--text-lead)] leading-[1.8] text-soft">
            Selected residential and commercial interiors across Aizawl and
            Mizoram. Each room is planned around how it is actually used, then
            drawn, built and fitted by the studio — the layout, the cabinetry,
            the hardware and the finish.
          </p>
        </div>
      </section>

      {/* Uniform 3-up grid of portrait tiles. */}
      <section aria-label="Selected interiors" className="bg-bone pb-[var(--pad-y)]">
        <div className="shell">
          <ul className="grid grid-cols-1 gap-[34px] tab:grid-cols-2 desk:grid-cols-3">
            {INTERIORS.map((label) => (
              <li key={label}>
                <PlaceholderImage ratio="3/4" label={label} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhatsAppBand location="interiors-band" />
    </>
  );
}
