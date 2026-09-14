import { FiArrowRight, FiFacebook, FiInstagram, FiMapPin, FiTool, FiShield, FiStar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Seo
        title="Repuestos y servicios automotrices"
        description="FRGREPUESTOS: repuestos multimarca y servicios automotrices en Córdoba Capital. Trabajamos articuladamente con Instrumental Luciano — más de 50 años de experiencia."
        path="/"
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        {/* Fondo decorativo premium */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 85% 15%, rgba(238,46,46,.14) 0%, transparent 32%),
              radial-gradient(circle at 8% 85%, rgba(5,61,90,.12) 0%, transparent 32%),
              radial-gradient(circle at 50% 50%, rgba(162,171,170,.06) 0%, transparent 60%)
            `,
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container-frg relative grid min-h-[640px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_.9fr]">
          {/* Left */}
          <div className="page-enter">
            <span className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-black uppercase tracking-[.15em] text-[var(--frg-red)]">
              Córdoba Capital · Multimarca
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[.95] tracking-[-.05em] sm:text-6xl lg:text-7xl">
              Repuestos que te ayudan a{" "}
              <span className="text-[var(--frg-red)]">seguir adelante.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Encontrá repuestos y soluciones para tu vehículo con atención cercana,
              experiencia y variedad multimarca. Trabajamos junto a{" "}
              <strong className="text-[var(--text)]">Instrumental Luciano</strong> con más de{" "}
              <strong className="text-[var(--text)]">50 años de trayectoria</strong>.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/productos" id="btn-hero-productos">
                Ver productos <FiArrowRight />
              </Button>
              <Button to="/contacto" variant="secondary" id="btn-hero-contacto">
                Hacer una consulta
              </Button>
            </div>
            <div className="mt-9 flex flex-wrap gap-5 text-sm font-bold text-[var(--muted)]">
              <span className="flex items-center gap-2">
                <FiMapPin /> Mariano Fragueiro 653 · B° Ducasse
              </span>
              <span>● Atención personalizada</span>
            </div>
          </div>

          {/* Right — visual card premium */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div
              className="rounded-[18px] border border-[var(--border)] p-7 shadow-[var(--shadow)]"
              style={{ background: "var(--surface)" }}
            >
              {/* Accent top */}
              <div className="mb-5 h-1 w-14 rounded bg-[var(--frg-red)]" />
              <h2 className="text-xl font-black text-[var(--text)] leading-snug mb-1">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-sm text-[var(--muted)] mb-5 leading-6">
                Somos el punto de encuentro entre repuestos de calidad y un servicio técnico con décadas de experiencia.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <FiStar />, title: "Variedad multimarca", text: "Todas las marcas del mercado." },
                  { icon: <FiTool />, title: "+50 años de experiencia", text: "Junto a Instrumental Luciano, BV Las Heras." },
                  { icon: <FiShield />, title: "Atención real", text: "Sin vueltas, con asesoramiento de verdad." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[7px] bg-[color-mix(in_srgb,var(--frg-red)_10%,var(--surface-2))] text-[var(--frg-red)]">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-black text-sm text-[var(--text)]">{item.title}</p>
                      <p className="text-xs text-[var(--muted)] mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-xl">
              <strong className="block text-lg text-[var(--frg-red)]">Multimarca</strong>
              <span className="text-xs font-bold text-[var(--muted)]">Calidad + variedad + confianza</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CARRUSEL DE MARCAS ── */}
      <Carousel />

      {/* ── NOSOTROS (resumen) ── */}
      <section className="container-frg py-20" id="nosotros">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="text-xs font-black uppercase tracking-[.2em] text-[var(--frg-red)]">Nosotros</span>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Un equipo que entiende de autos.</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/nosotros" variant="secondary" id="btn-home-nosotros">
                Conocernos <FiArrowRight />
              </Button>
            </div>
          </div>
          <div className="space-y-5 text-base leading-8 text-[var(--muted)]">
            <p>
              En FRGREPUESTOS nos gusta hacer las cosas de manera simple: escuchar qué
              necesitás, ayudarte a encontrar el repuesto correcto y acompañarte en el proceso.
            </p>
            <p>
              Trabajamos de manera articulada con{" "}
              <strong className="text-[var(--text)]">Instrumental Luciano</strong>, un taller con
              más de <strong className="text-[var(--text)]">50 años de experiencia</strong> en la
              zona de <strong className="text-[var(--text)]">Bv. Las Heras, Córdoba Capital</strong>.
            </p>
            <p>
              Seguinos en redes para ver los trabajos que realizamos y mandarnos tus consultas
              directamente. 😊
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                id="btn-home-instagram"
                className="inline-flex items-center gap-2 rounded-[9px] border border-[var(--border)] px-4 py-3 font-bold transition hover:border-[var(--frg-red)] hover:text-[var(--frg-red)]"
                href="https://www.instagram.com/frgrepuestos/"
                target="_blank"
                rel="noreferrer"
                onClick={() => console.log("click: home-instagram")}
              >
                <FiInstagram /> @frgrepuestos
              </a>
              <a
                id="btn-home-facebook"
                className="inline-flex items-center gap-2 rounded-[9px] border border-[var(--border)] px-4 py-3 font-bold transition hover:border-[var(--frg-red)] hover:text-[var(--frg-red)]"
                href="https://www.facebook.com/frgrepuestos"
                target="_blank"
                rel="noreferrer"
                onClick={() => console.log("click: home-facebook")}
              >
                <FiFacebook /> Frgrepuestos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="border-y border-[var(--border)] bg-[var(--surface-2)]">
        <div className="container-frg grid gap-6 py-16 md:grid-cols-3">
          {[
            ["01", "Atención cercana", "Te orientamos con información clara para que puedas tomar la mejor decisión."],
            ["02", "Variedad multimarca", "Repuestos y autopartes para distintas marcas y modelos del mercado."],
            ["03", "Soluciones integrales", "FRGREPUESTOS + Instrumental Luciano para acompañar todas las necesidades de tu vehículo."],
          ].map(([number, title, text]) => (
            <div key={number} className="border-l-2 border-[var(--frg-red)] pl-5">
              <span className="text-xs font-black text-[var(--frg-red)]">{number}</span>
              <h3 className="mt-2 text-xl font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA WHATSAPP ── */}
      <section className="container-frg py-20">
        <div className="rounded-[16px] border border-[var(--border)] bg-[var(--frg-navy)] p-8 text-white sm:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-black uppercase tracking-[.2em] text-[var(--frg-silver)]">
                ¿Necesitás asesoramiento?
              </span>
              <h2 className="mt-3 text-3xl font-black">
                Contanos qué vehículo tenés y qué necesitás.
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-200">
                Podés escribirnos por WhatsApp o completar el formulario de contacto y recibir un 15% OFF en mano de obra.
              </p>
            </div>
            <a
              id="btn-home-whatsapp"
              href="https://wa.me/5493517368376?text=Hola!%20Necesito%20consultar%20un%20repuesto."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[9px] bg-[var(--frg-red)] px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-95"
              onClick={() => console.log("click: home-whatsapp")}
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}