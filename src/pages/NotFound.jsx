import { FiArrowLeft, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Página no encontrada"
        description="La página que buscás no existe en FRGREPUESTOS."
        path="/404"
      />
      <section className="container-frg grid min-h-[75vh] place-items-center py-20 text-center page-enter">
        <div className="max-w-md">
          {/* Big 404 */}
          <div className="relative inline-block">
            <span
              className="block text-[10rem] font-black leading-none tracking-[-0.08em] select-none"
              style={{
                background: "linear-gradient(135deg, var(--frg-navy), var(--frg-red))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              404
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-[var(--text)]">
            Página no encontrada
          </h1>
          <p className="mx-auto mt-4 max-w-sm leading-7 text-[var(--muted)]">
            Parece que esta dirección no existe o fue movida. Volvamos a un lugar conocido.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              id="btn-404-home"
              className="inline-flex items-center gap-2 rounded-[9px] bg-[var(--frg-navy)] px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <FiHome /> Ir al inicio
            </Link>
            <Link
              to="/contacto"
              id="btn-404-contacto"
              className="inline-flex items-center gap-2 rounded-[9px] border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-black text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--frg-red)] hover:text-[var(--frg-red)]"
            >
              <FiArrowLeft /> Contactarnos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}