/**
 * Stand-in for photography that has not been shot yet. Uses the same warm
 * gradient language as the product tiles so the page reads as designed
 * rather than as a broken image. Pass `ratio` for aspect-driven tiles, or
 * size it with `className` (e.g. a fixed-height banner).
 */
export function PlaceholderImage({
  ratio,
  label,
  className = "",
  showLabel = true,
}: {
  ratio?: string;
  label: string;
  className?: string;
  /** Off when the block sits behind a scrim, where the caption would be
      unreadable and is not content anyway. */
  showLabel?: boolean;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — photography to come`}
      className={`relative flex items-end ${className}`}
      style={{
        ...(ratio ? { aspectRatio: ratio } : null),
        backgroundImage:
          "linear-gradient(117.85deg, rgb(213,202,185) 0%, rgb(158,151,142) 42.857%, rgb(132,128,122) 71.429%)",
      }}
    >
      {showLabel && (
        /* On a chip: the gradient runs light at one end, where a plain cream
           caption sits at roughly 1.2:1. */
        <span className="eyebrow m-[16px] bg-near/80 px-[10px] py-[7px] text-cream">
          {label}
        </span>
      )}
    </div>
  );
}
