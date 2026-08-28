import { Mizo } from "./mizo";
import { WhatsAppButton } from "./whatsapp-button";
import { mizo } from "@/lib/site";

/**
 * Full-bleed closing band on the `near` ground: reversed logo, a line, the
 * Mizo sentence, then the WhatsApp button. Sits flush to the footer.
 */
export function WhatsAppBand({
  location,
  line = "Tell us about your space.",
  prefill,
}: {
  location: string;
  line?: string;
  prefill?: string;
}) {
  return (
    <section className="bg-near">
      <div className="shell flex flex-col items-center gap-[30px] py-[100px] text-center">
        <p className="max-w-[620px] font-display text-[length:var(--text-statement)] font-light italic leading-[1.5] text-cream">
          {line}
        </p>
        <Mizo variant="sentence" tone="dark" className="max-w-[560px]">
          {mizo.whatsappCta}
        </Mizo>
        <WhatsAppButton location={location} prefill={prefill} />
      </div>
    </section>
  );
}
