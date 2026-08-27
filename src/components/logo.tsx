import Image from "next/image";

/**
 * The White Walls mark, supplied as artwork. Never re-set as type — this is
 * the brand component. Intrinsic 660 × 298; the width classes below scale it
 * while the width/height attributes hold the ratio.
 */
export function Logo({
  reversed = false,
  className = "",
  priority = false,
}: {
  reversed?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={reversed ? "/brand/logo-reversed.png" : "/brand/logo.png"}
      alt="White Walls"
      width={660}
      height={298}
      priority={priority}
      className={`h-auto ${className}`}
    />
  );
}
