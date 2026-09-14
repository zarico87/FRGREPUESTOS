import { Link } from "react-router-dom";

export default function Button({ children, to, href, onClick, variant = "primary", type = "button" }) {
  const className = `inline-flex items-center justify-center gap-2 rounded-[9px] border px-5 py-3 text-sm font-black transition duration-200 hover:-translate-y-0.5 ${
    variant === "primary"
      ? "border-[var(--frg-red)] bg-[var(--frg-red)] text-white hover:brightness-95"
      : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--frg-red)] hover:text-[var(--frg-red)]"
  }`;

  if (to) return <Link to={to} onClick={onClick} className={className}>{children}</Link>;
  if (href) return <a href={href} onClick={onClick} className={className}>{children}</a>;
  return <button type={type} onClick={onClick} className={className}>{children}</button>;
}