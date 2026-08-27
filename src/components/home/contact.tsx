import { Mizo } from "../mizo";
import { WhatsAppButton } from "../whatsapp-button";
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

        <Mizo variant="sentence" className="mt-[10px] block max-w-[620px]">
          {mizo.whatsappCta}
        </Mizo>

        <div className="mt-[10px] flex flex-col items-stretch gap-[16px] tab:flex-row tab:items-start">
          <WhatsAppButton location="home-contact" />

          <a
            href={`mailto:${studio.email}`}
            className="inline-flex min-h-[60px] items-center justify-center border border-ink px-[40px] py-[20px] text-ink transition-colors hover:border-bronze hover:text-bronze focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-bronze"
          >
            <span className="navlabel tracking-[0.176em]">Email us</span>
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
