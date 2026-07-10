/* Outlined hexagon badge with an icon inside — used for proof points and award-style markers */
export function HexBadge({
  children,
  size = 56,
}: {
  children?: React.ReactNode;
  size?: number;
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 56 64" className="absolute inset-0 w-full h-full" fill="none">
        <path
          d="M28 2 L52 16 V48 L28 62 L4 48 V16 Z"
          stroke="rgba(250,251,251,0.7)"
          strokeWidth="1.5"
        />
      </svg>
      <span className="relative text-text-1">{children}</span>
    </div>
  );
}
