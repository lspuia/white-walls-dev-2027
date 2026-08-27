/**
 * A Mizo line. Renders nothing until the owners supply the copy — Mizo is
 * never machine-translated. Always tagged `lang="lus"`; Mizo has no
 * two-letter ISO code.
 */
export function Mizo({
  children,
  className = "",
}: {
  children: string | null;
  className?: string;
}) {
  if (!children) return null;
  return (
    <span lang="lus" className={`mizo ${className}`}>
      {children}
    </span>
  );
}
