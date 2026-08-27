import Image from "next/image";

/**
 * LOGO-V3, exported from Figma as SVG. Never re-set as type — this is the
 * brand component. Intrinsic 659 × 354; the width classes below scale it
 * while the width/height attributes hold the 659:354 ratio. The reversed
 * variant is the same artwork with the ink recoloured for dark grounds.
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
      src={reversed ? "/brand/logo-reversed.svg" : "/brand/logo.svg"}
      alt="White Walls — Interior Design Studio"
      width={659}
      height={354}
      priority={priority}
      className={`h-auto ${className}`}
    />
  );
}
