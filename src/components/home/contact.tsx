import { Mizo } from "../mizo";
import { WhatsAppLink } from "../whatsapp-link";
import { studio, mizo } from "@/lib/site";

export function Contact() {
  return (
    <section aria-labelledby="contact-heading" className="band bg-bone">
      <div className="shell flex flex-col items-center gap-[30px] text-center">
        <p className="eyebrow tracking-[0.208em] text-brass">Start a project</p>
        <h2
          id="contact-heading"
          className="font-display text-[length:var(--text-contact)] font-light leading-[1.18] tracking-[-0.01em] text-ink"
        >
          Tell us about your space.
        </h2>
        <p className="max-w-[620px] text-[length:var(--text-lead)] leading-[1.8] text-soft">
          Send a plan, a photo, or just the room dimensions. We reply on
          WhatsApp, usually the same day.
          <Mizo className="mt-[14px] block">{mizo.contactLead}</Mizo>
        </p>

        <div className="mt-[22px] flex flex-col items-stretch gap-[16px] tab:flex-row tab:items-start">
          <WhatsAppLink
            location="home-contact"
            className="flex flex-col items-center gap-[6px] border border-brass bg-brass px-[44px] py-[22px] text-near transition-colors hover:border-bronze hover:bg-bronze hover:text-cream"
          >
            <span className="eyebrow tracking-[0.176em]">
              WhatsApp the studio
            </span>
            <Mizo>{mizo.whatsappCta}</Mizo>
          </WhatsAppLink>

          <a
            href={`mailto:${studio.email}`}
            className="flex items-center justify-center border border-ink px-[44px] py-[22px] text-ink transition-colors hover:border-bronze hover:text-bronze"
          >
            <span className="eyebrow tracking-[0.176em]">Email us</span>
          </a>
        </div>

        <p className="mt-[20px] eyebrow tracking-[0.144em] text-mute">
          {studio.city.toUpperCase()}
          {"  ·  "}
          {studio.hours.toUpperCase()}
        </p>
      </div>
    </section>
  );
}
