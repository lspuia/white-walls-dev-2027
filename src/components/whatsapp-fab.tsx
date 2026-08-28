"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WhatsAppLink } from "./whatsapp-link";
import { WhatsAppGlyph } from "./whatsapp-glyph";
import { productBySlug } from "@/lib/products";

/** The legal pages carry no CTA. */
const HIDDEN_ON = ["/privacy-policy", "/terms"];

/**
 * Floating WhatsApp button, mounted once in the root layout so every page
 * carries it — except the legal pages, which have no CTA. Square rather than
 * a circular FAB, to match the site's geometry.
 *
 * It retires once a real WhatsApp CTA or the footer is on screen: otherwise
 * it duplicates that CTA and, at the very bottom, sits on top of the footer's
 * TERMS link. A scroll listener rather than an IntersectionObserver, so the
 * behaviour is testable in headless Chrome, where IO callbacks do not fire.
 *
 * Tracking and the prefilled message are derived from the route, so a product
 * page still opens WhatsApp with that product named.
 */
export function WhatsAppFab() {
  const pathname = usePathname();
  const [atRealCta, setAtRealCta] = useState(false);

  useEffect(() => {
    const update = () => {
      const targets = document.querySelectorAll(
        "[data-whatsapp-band], [data-whatsapp-cta], footer"
      );
      let onScreen = false;
      targets.forEach((target) => {
        const box = target.getBoundingClientRect();
        if (box.top < window.innerHeight && box.bottom > 0) onScreen = true;
      });
      setAtRealCta(onScreen);
    };

    // rAF rather than a synchronous call, so the first paint is not blocked.
    const frame = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  if (HIDDEN_ON.includes(pathname) || atRealCta) return null;

  const product = pathname.startsWith("/products/")
    ? productBySlug(pathname.slice("/products/".length))
    : undefined;

  const location = product
    ? `fab-product-${product.slug}`
    : `fab-${pathname === "/" ? "home" : pathname.replace(/^\//, "")}`;
  const prefill = product
    ? `Hello White Walls — I'd like to ask about ${product.name}. `
    : undefined;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-end px-[var(--gutter)] pb-[calc(18px+env(safe-area-inset-bottom))]">
      <WhatsAppLink
        location={location}
        prefill={prefill}
        className="pointer-events-auto inline-flex min-h-[56px] items-center gap-[10px] border border-bronze bg-brass px-[20px] py-[16px] text-near shadow-[0_6px_20px_-6px_rgba(26,23,20,0.45)] transition-[background-color,color,transform] hover:-translate-y-px hover:bg-bronze hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-bronze"
      >
        <WhatsAppGlyph brand className="h-[22px] w-[22px]" />
        <span className="navlabel tracking-[0.14em]">WhatsApp</span>
        <span className="sr-only"> the studio</span>
      </WhatsAppLink>
    </div>
  );
}
