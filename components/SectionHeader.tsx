/* Section opener — uppercase label eyebrow, bold title (accent ONE key phrase
   via a nested <span className="text-accent">), optional lead */
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
        <span className="text-label font-semibold uppercase tracking-[0.08em] text-text-4">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-h2 md:text-h1 font-bold text-balance">{title}</h2>
      {lead && (
        <p className="mt-6 text-lead text-text-2 max-w-2xl mx-auto">{lead}</p>
      )}
    </div>
  );
}
