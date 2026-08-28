import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/page-title";
import { studio, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How White Walls collects, uses and protects information when you visit whitewalls.in or contact the studio.",
};

/** Carried over from the live site at whitewalls.in/privacy-policy. */
const LAST_UPDATED = "April 2026";

type Section = { heading: string; body: (string | string[])[] };

const SECTIONS: Section[] = [
  {
    heading: "1. Information We Collect",
    body: [
      "We may collect the following types of information when you interact with us:",
      [
        "Contact information — your name, phone number, and email address when you reach out to us directly.",
        "Enquiry details — information you voluntarily share about your interior design project or requirements.",
        "Usage data — anonymous technical information such as your browser type, device type, pages visited, and time spent on the site, collected via standard web analytics tools.",
      ],
      "We do not operate any account registration system, and we do not collect payment information through this website.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "Information we collect is used solely to:",
      [
        "Respond to your enquiries and provide information about our services.",
        "Schedule consultations or site visits.",
        "Improve the content and performance of our website.",
        "Comply with any applicable legal obligations.",
      ],
      "We will never sell, rent, or share your personal information with third parties for marketing purposes.",
    ],
  },
  {
    heading: "3. Cookies and Analytics",
    body: [
      "Our website may use cookies — small text files stored on your device — to understand how visitors use the site. These cookies do not identify you personally. You can disable cookies through your browser settings; however, some parts of the website may not function as intended if you do so.",
      "We may use a third-party analytics service (such as Google Analytics) to analyse website traffic in aggregate. This service may set its own cookies. Please refer to Google’s Privacy Policy for details on how Google handles that data.",
    ],
  },
  {
    heading: "4. Third-Party Links",
    body: [
      "Our website contains links to external websites, including our social media pages (Facebook, Instagram) and partner websites. We are not responsible for the privacy practices of those sites. We encourage you to read their privacy policies before providing any personal information.",
    ],
  },
  {
    heading: "5. Data Security",
    body: [
      "We take reasonable precautions to protect any personal information you share with us. Contact details received via phone or email are kept confidential and accessed only by authorised personnel at White Walls. We do not store sensitive personal data on our website servers.",
    ],
  },
  {
    heading: "6. Data Retention",
    body: [
      "We retain contact and project enquiry information only for as long as necessary to provide our services or as required by law. You may request deletion of your personal information at any time by contacting us.",
    ],
  },
  {
    heading: "7. Your Rights",
    body: [
      "You have the right to:",
      [
        "Request access to the personal information we hold about you.",
        "Request correction of inaccurate information.",
        "Request deletion of your personal information.",
        "Withdraw consent for us to contact you at any time.",
      ],
      "To exercise any of these rights, please contact us using the details below.",
    ],
  },
  {
    heading: "8. Children’s Privacy",
    body: [
      "Our website is not directed at children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.",
    ],
  },
  {
    heading: "9. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this page periodically. Continued use of the website after changes are posted constitutes your acceptance of the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageTitle eyebrow="Legal" title="Privacy Policy" />

      <section className="shell pb-[var(--pad-y)]">
        <div className="mx-auto flex max-w-[760px] flex-col gap-[36px]">
          <p className="eyebrow tracking-[0.176em] text-mute">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
            White Walls (“we”, “our”, or “us”) operates the website
            whitewalls.in. This Privacy Policy explains how we collect, use, and
            protect information when you visit our website or contact us for
            interior design services. By using our website, you agree to the
            practices described in this policy.
          </p>

          {SECTIONS.map((section) => (
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
              10. Contact Us
            </h2>
            <p className="text-[length:var(--text-body)] leading-[1.82] text-soft">
              If you have any questions or concerns about this Privacy Policy or
              how we handle your information, please get in touch:
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
