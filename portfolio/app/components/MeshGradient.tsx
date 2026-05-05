"use client";

type Variant = "orange" | "red" | "yellow" | "magenta";

const variants: Record<Variant, string> = {
  orange:
    "radial-gradient(at 18% 22%, #ff5b1f 0px, transparent 55%), radial-gradient(at 78% 14%, #e8331a 0px, transparent 50%), radial-gradient(at 86% 78%, #ff3d88 0px, transparent 55%), radial-gradient(at 28% 86%, #ffc73a 0px, transparent 60%), radial-gradient(at 50% 50%, #ff8a3d 0px, transparent 50%)",
  red:
    "radial-gradient(at 14% 18%, #e8331a 0px, transparent 55%), radial-gradient(at 82% 26%, #ff5b1f 0px, transparent 50%), radial-gradient(at 78% 82%, #ff3d88 0px, transparent 50%), radial-gradient(at 24% 80%, #b81f12 0px, transparent 55%)",
  yellow:
    "radial-gradient(at 18% 22%, #ffc73a 0px, transparent 55%), radial-gradient(at 78% 14%, #ff8a3d 0px, transparent 50%), radial-gradient(at 86% 78%, #ff5b1f 0px, transparent 55%), radial-gradient(at 28% 86%, #ffd76a 0px, transparent 60%)",
  magenta:
    "radial-gradient(at 14% 18%, #ff3d88 0px, transparent 55%), radial-gradient(at 82% 26%, #ff5b1f 0px, transparent 50%), radial-gradient(at 78% 82%, #e8331a 0px, transparent 50%), radial-gradient(at 24% 80%, #ffc73a 0px, transparent 55%)",
};

export function MeshGradient({
  variant = "orange",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundColor: "#ffc73a",
        backgroundImage: variants[variant],
        filter: "saturate(1.05)",
      }}
    />
  );
}
