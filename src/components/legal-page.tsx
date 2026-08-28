import Link from "next/link";
import { PageTitle } from "./page-title";
import { studio, contact } from "@/lib/site";

/** A paragraph, or a bulleted list of points. */
export type LegalBlock = string | string[];
export type LegalSection = { heading: string; body: LegalBlock[] };

/**
 * Shared layout for the legal pages, so Privacy and Terms stay identical.
 * The contact block reads from site.ts rather than being restated per page.
 */
export function LegalPage({
  title,
  lastUpdated,
  intro,
  sections,
  contactHeading,
  contactIntro,
}: {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
  contactHeading: string;
  contactIntro: string;
}) {
  return (
    <>
      <PageTitle eyebrow="Legal" title={title} />

      <section className="shell pb-[var(--pad-y)]">
        <div className="mx-auto flex max-w-[760px] flex-col gap-[36px]">
          <p className="eyebrow tracking-[0.176em] text-mute">
            Last updated: {lastUpdated}
          </p>

          <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
            {intro}
          </p>

          {sections.map((section) => (
            <div key={section.heading} className="flex flex-col gap-[16px]">
              <h2 className="font-display text-[length:var(--text-product)] font-light leading-[1.25] text-ink">
                {section.heading}
              </h2>
              {section.body.map((block, i) =>
                Array.isArray(block) ? (
                  <ul
                    key={i}
                    className="flex list-disc flex-col gap-[8px] pl-[22px] text-[length:var(--text-body)] leading-[1.82] text-soft marker:text-brass"
                  >
                    {block.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p
                    key={i}
                    className="text-[length:var(--text-body)] leading-[1.82] text-soft"
                  >
                    {block}
                  </p>
                )
              )}
            </div>
          ))}

          <div className="flex flex-col gap-[16px]">
            <h2 className="font-display text-[length:var(--text-product)] font-light leading-[1.25] text-ink">
              {contactHeading}
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              {contactIntro}
            </p>
            <address className="not-italic text-[length:var(--text-body)] leading-[1.82] text-soft">
              <p>{studio.name}</p>
              <p>{contact.address.line1}</p>
              <p>{contact.address.line2}</p>
              <p className="mt-[10px]">
                {contact.phones.map((phone, i) => (
                  <span key={phone.dial}>
                    {i > 0 && <span aria-hidden> / </span>}
                    <a
                      href={`tel:${phone.dial}`}
                      className="transition-colors hover:text-bronze"
                    >
                      {phone.display}
                    </a>
                  </span>
                ))}
              </p>
              <p>
                <a
                  href={`mailto:${studio.email}`}
                  className="transition-colors hover:text-bronze"
                >
                  {studio.email}
                </a>
              </p>
            </address>
          </div>

          <Link
            href="/contact"
            className="eyebrow mt-[8px] tracking-[0.176em] text-bronze transition-colors hover:text-ink"
          >
            Contact the studio
          </Link>
        </div>
      </section>
    </>
  );
}
