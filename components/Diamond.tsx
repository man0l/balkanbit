/* Small rotated-square diamond — the brand mark and bullet of the BalkanBit system */
export function Diamond({ className = "" }: { className?: string }) {
  return <span className={`inline-block w-[7px] h-[7px] rotate-45 ${className}`} />;
}
