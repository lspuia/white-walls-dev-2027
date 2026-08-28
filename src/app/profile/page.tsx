import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { PlaceholderImage } from "@/components/placeholder-image";
import { WhatsAppBand } from "@/components/whatsapp-band";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Profile",
  description:
    "White Walls is an interior design studio in Aizawl, Mizoram, led by Liansangkimi Pachuau. Residential and commercial interiors, custom kitchens and hardware supply since 2017.",
};

export default function ProfilePage() {
  return (
    <>
      <PageTitle eyebrow="The studio" title="Profile" />

      {/* Our story — centred intro, matching the Interiors page. */}
      <section aria-labelledby="story-heading" className="bg-bone pb-[56px] tab:pb-[64px]">
        <div className="shell flex flex-col items-center gap-[20px] text-center">
          <h2 id="story-heading" className="eyebrow tracking-[0.208em] text-bronze">
            Our story
          </h2>
          <div className="flex max-w-[700px] flex-col gap-[20px]">
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-soft">
              White Walls is an interior design studio in Aizawl, working across
              residential and commercial interiors since {studio.since}. The
              studio is led by {studio.proprietor}, who works with clients from
              the first measured layout through to the last handle fitted.
            </p>
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-soft">
              Kim began her career in New Delhi at DeMuro Das — then known as
              Urbanist — a luxury furniture and interior design studio, and a
              regular on the AD50. Three years there, working to the standards
              of India&rsquo;s most demanding clients, set the bar she still
              builds to.
            </p>
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-soft">
              We design the whole room — the layout, the cabinetry, the hardware
              and the finish — and supply the fittings that hold it together.
              Custom kitchens are our specialism.
            </p>
          </div>
        </div>
      </section>

      {/* Portrait, centred under the intro. */}
      <section className="shell pb-[72px] tab:pb-[88px]">
        <PlaceholderImage
          ratio="2/3"
          label="Kim at the studio"
          className="mx-auto w-full max-w-[460px]"
        />
      </section>

      {/* Philosophy — centred, matching the Our story block. */}
      <section
        aria-labelledby="philosophy-heading"
        className="bg-bone pb-[var(--pad-y)]"
      >
        <div className="shell flex flex-col items-center gap-[20px] text-center">
          <h2
            id="philosophy-heading"
            className="eyebrow tracking-[0.208em] text-bronze"
          >
            Philosophy
          </h2>
          <div className="flex max-w-[700px] flex-col gap-[20px]">
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-soft">
              We plan a room around how it is actually used — where the light
              falls, where people stand, what has to be within reach. The
              cabinetry is drawn to the space rather than ordered to a catalogue
              size, and the hardware is specified early, because it decides how
              a room feels every day.
            </p>
            <p className="text-[length:var(--text-lead)] leading-[1.8] text-soft">
              The result should be quiet. Nothing in a finished room ought to
              need explaining — the hinge, the handle and the light should all
              agree.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppBand location="profile-band" />
    </>
  );
}
