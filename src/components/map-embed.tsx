import { map } from "@/lib/site";

/**
 * Google Maps listing. Lazy-loaded, and always accompanied by a plain link
 * so the location is reachable if the frame is blocked or JS is off.
 */
export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand desk:aspect-[3/2]">
        {map.embedSrc ? (
          <iframe
            src={map.embedSrc}
            title="White Walls on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="eyebrow text-mute">Map to come</span>
          </div>
        )}
      </div>
      <a
        href={map.link}
        target="_blank"
        rel="noreferrer noopener"
        className="eyebrow mt-[16px] inline-block tracking-[0.176em] text-bronze transition-colors hover:text-ink"
      >
        Open in Google Maps
      </a>
    </div>
  );
}
