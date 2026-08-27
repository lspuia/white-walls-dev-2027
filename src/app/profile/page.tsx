import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { PlaceholderImage } from "@/components/placeholder-image";
import { Logo } from "@/components/logo";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "White Walls is an interior design studio in Aizawl, Mizoram, led by Liansangkimi Pachuau. Residential and commercial interiors, custom kitchens and hardware supply since 2017.",
};

/** Authorised dealerships — the factual equivalent of a press list. */
const DEALERSHIPS = [
  "Hettich",
  "Brassage",
  "Crompton",
  "Yale & Godrej",
  "Häfele",
] as const;

export default function ProfilePage() {
  return (
    <>
      <PageTitle eyebrow="The studio" title="Profile" />

      {/* Our story — text left, portrait right. Image is top-aligned and the
          text column drops, per the reference rhythm. */}
      <section aria-labelledby="story-heading" className="shell pt-[80px]">
        <div className="grid gap-[48px] desk:grid-cols-12 desk:gap-x-[40px]">
          <div className="order-2 flex flex-col gap-[26px] desk:order-1 desk:col-span-5 desk:pt-[110px]">
            <h2
              id="story-heading"
              className="eyebrow tracking-[0.208em] text-brass"
            >
              Our story
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              White Walls is an interior design studio in Aizawl, working across
              residential and commercial interiors since {studio.since}. The
              studio is led by {studio.proprietor}, who works with clients from
              the first measured layout through to the last handle fitted.
            </p>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              We design the whole room — the layout, the joinery, the hardware
              and the finish — and supply the fittings that hold it together.
              Custom kitchens are our specialism.
            </p>

            <p className="mt-[18px] text-[length:var(--text-body)] leading-[1.82] text-soft">
              Authorised dealerships:
            </p>
            <ul className="flex flex-col gap-[6px]">
              {DEALERSHIPS.map((name) => (
                <li
                  key={name}
                  className="text-[length:var(--text-body)] leading-[1.68] text-bronze"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 desk:order-2 desk:col-span-5 desk:col-start-8">
            <PlaceholderImage ratio="2/3" label="Kim at the studio" />
          </div>
        </div>
      </section>

      {/* Philosophy — mirrored: image left, text right. */}
      <section
        aria-labelledby="philosophy-heading"
        className="shell pt-[110px] pb-[var(--pad-y)]"
      >
        <div className="grid gap-[48px] desk:grid-cols-12 desk:gap-x-[40px]">
          <div className="desk:col-span-5">
            <PlaceholderImage ratio="3/4" label="Recent interior" />
          </div>

          <div className="flex flex-col gap-[26px] desk:col-span-5 desk:col-start-8 desk:pt-[150px]">
            <h2
              id="philosophy-heading"
              className="eyebrow tracking-[0.208em] text-brass"
            >
              Philosophy
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              We plan a room around how it is actually used — where the light
              falls, where people stand, what has to be within reach. The
              joinery is drawn to the space rather than ordered to a catalogue
              size, and the hardware is specified early, because it decides how
              a room feels every day.
            </p>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              The result should be quiet. Nothing in a finished room ought to
              need explaining — the hinge, the handle and the light should all
              agree.
            </p>
          </div>
        </div>
      </section>

      {/* Inset dark band, closing the page on the studio's primary CTA. */}
      <section className="shell pb-[var(--pad-y)]">
        <div className="mx-auto flex max-w-[1030px] flex-col items-center gap-[30px] bg-near px-[var(--gutter)] py-[100px] text-center">
          <Logo reversed className="w-[176px]" />
          <p className="max-w-[620px] font-display text-[length:var(--text-statement)] font-light italic leading-[1.5] text-cream">
            Tell us about your space.
          </p>
          <WhatsAppLink
            location="profile-band"
            className="eyebrow tracking-[0.176em] text-brass transition-colors hover:text-cream"
          >
            WhatsApp the studio
          </WhatsAppLink>
        </div>
      </section>
    </>
  );
}
