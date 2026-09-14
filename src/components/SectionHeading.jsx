export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && (
        <span className="mb-3 inline-block text-xs font-black uppercase tracking-[.2em] text-[var(--frg-red)]">
          {eyebrow}
        </span>
      )}
      <h1 className="text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl">
        {title}
      </h1>
      {text && <p className="mt-4 leading-7 text-[var(--muted)]">{text}</p>}
    </div>
  );
}