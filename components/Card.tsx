/* Surface card — #191D27 fill, 8px radius, optional hover lift to surface-2 */
export function Card({
  children,
  hover = false,
  className = "",
}: {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg bg-surface ${hover ? "hover:bg-surface-2 transition-colors" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
