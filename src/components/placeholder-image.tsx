/**
 * Stand-in for photography that has not been shot yet. Uses the same warm
 * gradient language as the product tiles so the page reads as designed
 * rather than as a broken image.
 */
export function PlaceholderImage({
  ratio = "3/4",
  label,
  className = "",
}: {
  ratio?: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} — photography to come`}
      className={`relative flex items-end ${className}`}
      style={{
        aspectRatio: ratio,
        backgroundImage:
          "linear-gradient(117.85deg, rgb(213,202,185) 0%, rgb(158,151,142) 42.857%, rgb(132,128,122) 71.429%)",
      }}
    >
      <span className="eyebrow m-[20px] text-cream/80">{label}</span>
    </div>
  );
}
