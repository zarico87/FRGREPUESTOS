import { FiFacebook, FiInstagram, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const socials = [
  {
    label: "WhatsApp",
    href: "https://wa.me/5493517368376",
    img: "/img/logos/logowhatsapp.png",
    icon: <FaWhatsapp />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/frgrepuestos/",
    img: "/img/logos/logoinstagram.png",
    icon: <FiInstagram />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61562034547817",
    img: "/img/logos/logofacebook.png",
    icon: <FiFacebook />,
  },
];

const navLinks = [
  { to: "/nosotros",  label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto",  label: "Contacto" },
  { to: "/#frgred",   label: "🔥 Programa FRGRED", highlight: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="container-frg py-12">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" aria-label="FRGREPUESTOS - Inicio">
              <img
                src="/img/logos/logofrgrepuestos.png"
                alt="FRG Repuestos"
                className="h-10 w-auto object-contain mb-3"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </Link>
            <p className="text-sm text-[var(--muted)] leading-7 max-w-xs">
              Repuestos multimarca y soluciones automotrices en Córdoba Capital,
              trabajando junto a Instrumental Luciano.
            </p>
            <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-0.5 flex-shrink-0 text-[var(--frg-red)]" />
                <span>Mariano Fragueiro 653 · B° Ducasse · Córdoba Capital</span>
              </div>
              <a href="mailto:frgrepuestos@gmail.com" className="flex items-center gap-2 hover:text-[var(--frg-red)] transition-colors">
                <FiMail className="text-[var(--frg-red)]" />
                frgrepuestos@gmail.com
              </a>
              <a href="tel:3517368376" className="flex items-center gap-2 hover:text-[var(--frg-red)] transition-colors">
                <FiPhone className="text-[var(--frg-red)]" />
                351 736 8376
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em] text-[var(--muted)] mb-4">Navegación</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`text-sm font-semibold transition-colors ${
                      link.highlight
                        ? "text-[var(--frg-red)] hover:brightness-110 font-black"
                        : "text-[var(--muted)] hover:text-[var(--frg-red)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[.18em] text-[var(--muted)] mb-4">Seguinos</h3>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center gap-3 group"
                  onClick={() => console.log(`click: footer-${social.label.toLowerCase()}`)}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-[8px] border border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] transition group-hover:-translate-y-1 group-hover:border-[var(--frg-red)] group-hover:text-[var(--frg-red)]">
                    <img
                      src={social.img}
                      alt={social.label}
                      className="h-5 w-5 object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "block";
                      }}
                    />
                    <span style={{ display: "none" }}>{social.icon}</span>
                  </span>
                  <span className="text-sm font-semibold text-[var(--muted)] group-hover:text-[var(--frg-red)] transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="text-xs text-[var(--muted)]">
            © 2026 · FRGREPUESTOS · Todos los derechos reservados
          </p>
          <p className="text-xs text-[var(--muted)]">
            Página diseñada por <strong className="text-[var(--text)]">ZadikDesign</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}