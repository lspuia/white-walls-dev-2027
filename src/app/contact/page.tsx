import type { Metadata } from "next";
import { PageTitle } from "@/components/page-title";
import { MapEmbed } from "@/components/map-embed";
import { Mizo } from "@/components/mizo";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { studio, contact, mizo } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to White Walls about your space. Interior design studio in Aizawl, Mizoram — we reply on WhatsApp, usually the same day.",
};

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[8px]">
      <p className="eyebrow tracking-[0.208em] text-bronze">{label}</p>
      <div className="text-[length:var(--text-body)] leading-[1.82] text-soft">
        {children}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageTitle eyebrow="Start a project" title="Contact" />


      <section className="bg-bone pb-[56px] tab:pb-[64px]">
        <div className="shell flex justify-center">
          <p className="max-w-[700px] text-center text-[length:var(--text-lead)] leading-[1.8] text-soft">
            We work best from the start — measuring the space ourselves and
            planning the layout from scratch. Call the studio, message us on
            WhatsApp, or send an email; we usually reply the same day.
          </p>
        </div>
      </section>

      <section className="shell pb-[var(--pad-y)]">
        <div className="grid gap-[48px] desk:grid-cols-12 desk:gap-x-[40px]">
          {/* Details */}
          <div className="flex flex-col gap-[32px] desk:col-span-5">
            <Detail label="Studio">
              <p>{contact.address.line1}</p>
              <p>{contact.address.line2}</p>
            </Detail>

            <Detail label="Hours">
              <p>{studio.hours}</p>
            </Detail>

            <Detail label="Phone">
              <ul className="flex flex-col gap-[4px]">
                {contact.phones.map((phone) => (
                  <li key={phone.dial}>
                    <a
                      href={`tel:${phone.dial}`}
                      className="transition-colors hover:text-bronze"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </Detail>

            <Detail label="Email">
              <ul className="flex flex-col gap-[4px]">
                {contact.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="transition-colors hover:text-bronze"
                    >
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </Detail>

            <div className="flex flex-col items-start gap-[16px]">
              <Mizo variant="sentence" className="block max-w-[420px]">
                {mizo.whatsappCta}
              </Mizo>
              <WhatsAppButton location="contact-page" />
            </div>
          </div>

          {/* Listing */}
          <div className="desk:col-span-7">
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
