import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of whitewalls.in — copyright in the studio's photography and text, third-party trademarks, and the status of information published here.",
};

const LAST_UPDATED = "August 2026";

const SECTIONS: LegalSection[] = [
  {
    heading: "1. About This Website",
    body: [
      "This website is published by White Walls, an interior design studio based in Aizawl, Mizoram. It exists to show our work and to let you get in touch with us.",
      "Nothing is sold through this website. There is no ordering facility, no account registration and no payment facility. Enquiries made here lead to a conversation, not to a purchase.",
    ],
  },
  {
    heading: "2. Information Is Not an Offer",
    body: [
      "Descriptions of our services, the products we supply and the dealerships we hold are published for information only. They are indicative, and they are not an offer to sell or supply.",
      "Specifications, availability, lead times and prices are confirmed in writing for each project. Items described as made to order are quoted individually. Nothing on this website forms a contract between us; any work we take on is governed by the separate written agreement for that project.",
    ],
  },
  {
    heading: "3. Copyright in Our Work",
    body: [
      "All photographs, drawings, text and page layouts on this website, together with the White Walls name and mark, are our property unless stated otherwise, and are protected by copyright.",
      "You are welcome to view the site and to share links to it. You may not reproduce, republish or reuse any photograph, drawing or text from this website — in print, online, or within a portfolio, tender or marketing material — without our written permission.",
      "If you would like to use an image, please ask. We are generally happy to agree, on terms.",
    ],
  },
  {
    heading: "4. Third-Party Brands and Trademarks",
    body: [
      "Brand names, logos and trademarks shown on this website, including those of the manufacturers whose products we supply, belong to their respective owners.",
      "White Walls specifies, supplies and installs these products. We do not manufacture them. Their appearance on this website does not imply any relationship beyond the dealership or supply arrangement described, and does not imply endorsement of White Walls by those manufacturers except where we state that we hold an authorised dealership.",
    ],
  },
  {
    heading: "5. Accuracy of Content",
    body: [
      "We take care to keep this website accurate and current, but we do not warrant that it is complete or free of errors and omissions. Content, including product ranges and project images, may change without notice.",
    ],
  },
  {
    heading: "6. Links to Other Websites",
    body: [
      "This website links to external sites, including our social media pages and those of manufacturers we work with. We do not control those sites and are not responsible for their content, their products or their practices.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    body: [
      "To the extent permitted by law, White Walls is not liable for any loss or damage arising from your use of, or reliance on, this website or its content. Nothing in these terms excludes or limits any liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    heading: "8. Changes to These Terms",
    body: [
      "We may update these terms from time to time. The version published on this page, with the date shown above, is the current one. Continued use of the website after changes are posted constitutes acceptance of the updated terms.",
    ],
  },
  {
    heading: "9. Governing Law",
    body: [
      "These terms are governed by the laws of India. The courts at Aizawl, Mizoram have jurisdiction over any dispute arising from this website or these terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      lastUpdated={LAST_UPDATED}
      intro="These terms apply to your use of whitewalls.in. By using the website, you agree to them. They cover the website itself — any design, supply or installation work we take on is governed by the separate written agreement for that project."
      sections={SECTIONS}
      contactHeading="10. Contact Us"
      contactIntro="If you have any questions about these terms, or would like permission to use something from this website, please get in touch:"
    />
  );
}
