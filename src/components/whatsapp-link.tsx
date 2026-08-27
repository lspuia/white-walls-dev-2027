"use client";

import type { ReactNode } from "react";
import { whatsappHref, WHATSAPP_PREFILL } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * WhatsApp is the primary conversion — every click is tracked. Fires into
 * gtag and dataLayer when either is present, and is a no-op otherwise, so
 * the link works before analytics is wired up.
 */
export function WhatsAppLink({
  children,
  prefill = WHATSAPP_PREFILL,
  location,
  className = "",
}: {
  children: ReactNode;
  prefill?: string;
  location: string;
  className?: string;
}) {
  function track() {
    const payload = { event: "whatsapp_click", location };
    window.dataLayer?.push(payload);
    window.gtag?.("event", "whatsapp_click", { location });
  }

  return (
    <a
      href={whatsappHref(prefill)}
      target="_blank"
      rel="noreferrer noopener"
      onClick={track}
      data-analytics="whatsapp"
      data-location={location}
      className={className}
    >
      {children}
    </a>
  );
}
