import { WhatsAppLink } from "./whatsapp-link";
import { WhatsAppGlyph } from "./whatsapp-glyph";

/**
 * The primary conversion. Filled brass with the WhatsApp glyph so it reads as
 * a button rather than a line of text, on both the bone and near grounds.
 */
export function WhatsAppButton({
  location,
  prefill,
  label = "WhatsApp the studio",
}: {
  location: string;
  prefill?: string;
  label?: string;
}) {
  return (
    <WhatsAppLink
      location={location}
      prefill={prefill}
      className="inline-flex min-h-[60px] items-center justify-center gap-[12px] border border-brass bg-brass px-[40px] py-[20px] text-near shadow-[0_1px_0_0_rgba(26,23,20,0.14)] transition-[background-color,border-color,color,transform] hover:-translate-y-px hover:border-bronze hover:bg-bronze hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-bronze"
    >
      <WhatsAppGlyph />
      <span className="navlabel tracking-[0.176em]">{label}</span>
    </WhatsAppLink>
  );
}
