/**
 * A Mizo line. Renders nothing until the owners supply the copy — Mizo is
 * never machine-translated. Always tagged `lang="lus"`; Mizo has no
 * two-letter ISO code.
 *
 * `variant="label"` is the uppercase small-caps tier for short labels.
 * `variant="sentence"` keeps the owners' sentence case for running text.
 * `tone="dark"` lifts the colour to brass for dark grounds, where bronze
 * falls below contrast.
 */
export function Mizo({
  children,
  variant = "label",
  tone = "light",
  className = "",
}: {
  children: string | null;
  variant?: "label" | "sentence";
  tone?: "light" | "dark";
  className?: string;
}) {
  if (!children) return null;
  return (
    <span
      lang="lus"
      className={`${variant === "sentence" ? "mizo-sentence" : "mizo"} ${
        tone === "dark" ? "text-brass" : "text-bronze"
      } ${className}`}
    >
      {children}
    </span>
  );
}
