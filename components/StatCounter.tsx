/* Big stat number with a red superscript suffix and an uppercase label */
export function StatCounter({
  value,
  suffix = "＋",
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-6xl font-extrabold leading-none">
        {value}
        <span className="text-accent text-3xl md:text-4xl align-super">{suffix}</span>
      </div>
      <div className="mt-3 text-xs font-semibold uppercase tracking-[0.07em] text-text-3 max-w-[180px] mx-auto">
        {label}
      </div>
    </div>
  );
}
