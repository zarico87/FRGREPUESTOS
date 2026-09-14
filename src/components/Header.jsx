import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import styles from "./Header.module.css";

const links = [
  { to: "/nosotros",  label: "Nosotros" },
  { to: "/productos", label: "Productos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto",  label: "Contacto" },
];

export default function Header({ dark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className="container-frg flex items-center justify-between gap-4 py-3">
        {/* Logo — clica a home */}
        <Link to="/" onClick={closeMenu} className={styles.logo} aria-label="FRGREPUESTOS - Inicio">
          <img
            src="/img/logos/logofrgrepuestos.png"
            alt="FRG Repuestos"
            className={styles.logoImg}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <span className={styles.logoFallback}>
            <span className={styles.logoMain}>FRG</span>
            <span className={styles.logoSub}>REPUESTOS</span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            id="btn-toggle-theme"
            className={styles.iconButton}
            onClick={onToggleTheme}
            aria-label={dark ? "Activar tema claro" : "Activar tema oscuro"}
            title={dark ? "Tema claro" : "Tema oscuro"}
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className={`${styles.iconButton} ${styles.mobileButton}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}