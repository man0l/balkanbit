/* Section opener — faint uppercase eyebrow, bold display title (accent a key phrase
   via a nested span), optional muted lead */
export function SectionHeader({
  eyebrow,
  title,
  lead,
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && (
        <span className="text-[15px] font-semibold uppercase tracking-[0.05em] text-text-4">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-[34px] md:text-[56px] font-bold leading-[1.16]">{title}</h2>
      {lead && (
        <p className="mt-6 text-text-2 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          {lead}
        </p>
      )}
    </div>
  );
}
