import { useState } from "react";
import { 
  FiUsers, 
  FiCheckCircle, 
  FiGift, 
  FiArrowRight, 
  FiDollarSign, 
  FiTool, 
  FiHelpCircle,
  FiChevronDown,
  FiChevronUp,
  FiShare2,
  FiAward
} from "react-icons/fi";
import { FaWhatsapp, FaFire } from "react-icons/fa";
import styles from "./FrgRedSection.module.css";

const steps = [
  {
    number: "01",
    icon: <FiShare2 className="text-[var(--frg-red)]" />,
    title: "Recomendá FRGREPUESTOS",
    description: "Compartí tu experiencia con amigos, familiares o colegas para comprar repuestos o realizar services mecánicos.",
  },
  {
    number: "02",
    icon: <FiCheckCircle className="text-[var(--frg-navy)] dark:text-[var(--frg-silver)]" />,
    title: "Tus contactos concretan",
    description: "Cada persona derivada efectiviza su compra o service en nuestro taller (no cuenta solo cotización).",
  },
  {
    number: "03",
    icon: <FiAward className="text-[var(--frg-red)]" />,
    title: "¡Activás tu beneficio!",
    description: "Al acumular 5 clientes derivados que hayan comprado o realizado un service, desbloqueás tus descuentos exclusivos.",
  },
];

const faqs = [
  {
    q: "¿Cómo avisan mis referidos que vienen de mi parte?",
    a: "¡Es muy simple! Al momento de consultar o visitar nuestro local o taller, tu contacto solo debe indicar tu nombre completo y número de teléfono. Nuestro equipo registrará la compra o service en tu ficha de FRGRED.",
  },
  {
    q: "¿Cuántas veces puedo obtener el beneficio?",
    a: "¡No hay ningún límite! Cada vez que sumes 5 referidos que hayan concretado su compra o service, activás un nuevo cupón de beneficio para usar cuando lo necesites.",
  },
  {
    q: "¿Tiene fecha de vencimiento el beneficio desbloqueado?",
    a: "Sí. Una vez alcanzados tus 5 referidos, tu beneficio tiene una validez de 6 meses desde la fecha en que fue generado. Pasado ese plazo, si no lo utilizaste, el beneficio vence y deberás acumular nuevamente 5 referidos para obtenerlo. ¡Así que no te olvides de usarlo!",
  },
];

export default function FrgRedSection({ className = "" }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq((curr) => (curr === idx ? null : idx));
  };

  const whatsappMessage = encodeURIComponent(
    "Hola FRGREPUESTOS! 🔥 Quiero sumarme al programa FRGRED y empezar a recomendar a mis contactos para sumar beneficios."
  );
  const whatsappUrl = `https://wa.me/5493517368376?text=${whatsappMessage}`;

  return (
    <section id="frgred" className={`${styles.sectionWrapper} ${className}`}>
      {/* Dynamic background lighting */}
      <div className={styles.bgGlowRed} aria-hidden="true" />
      <div className={styles.bgGlowNavy} aria-hidden="true" />
      <div className={styles.gridPattern} aria-hidden="true" />

      <div className={`container-frg ${styles.innerContent}`}>
        {/* ── TOP HEADER / PRESENTATION ── */}
        <div className={styles.headerGrid}>
          <div>
            <div className={styles.badgeContainer}>
              <span className={styles.badgeDot} />
              <span>🚗 Programa Exclusivo de Referidos</span>
            </div>

            <h2 className={styles.mainTitle}>
              En FRGREPUESTOS, tu confianza{" "}
              <span className={styles.highlightText}>también se paga.</span>
            </h2>

            <p className={styles.hookPhrase}>
              "¡Sumate a FRGRED y ahorrá recomendando!"
            </p>

            <div className="space-y-3">
              <p className={styles.description}>
                <strong>FRGRED</strong> es el programa de referidos de FRGREPUESTOS. Si ya sos parte de la familia FRG, ahora también podés ganar descuentos reales por algo que ya hacés todo el tiempo: <strong>recomendarnos</strong>.
              </p>
              <p className={styles.description}>
                Cada vez que un amigo, familiar o colega elige FRGREPUESTOS gracias a vos, estás un paso más cerca de ahorrar en tu próxima compra o service.
              </p>
            </div>
          </div>

          {/* Logo Showcase Card */}
          <div className={styles.brandCardWrapper}>
            <div className={styles.floatingBadgeLeft}>
              <FaFire /> 100% Acumulable
            </div>
            <div className={styles.floatingBadgeRight}>
              <FiGift /> Descuentos Directos
            </div>

            <div className={styles.brandCard}>
              <div className={styles.brandCardShine} />
              <img
                src="/img/logos/frgred.png"
                alt="Programa FRGRED - FRGREPUESTOS"
                className={styles.logoImage}
                loading="lazy"
              />
              <div className={styles.brandTagline}>Comunidad & Beneficios</div>
              <p className={styles.brandSubtext}>
                Tu red de contactos te hace ganar beneficios exclusivos en repuestos y taller.
              </p>
            </div>
          </div>
        </div>

        {/* ── HOW IT WORKS & PROGRESS ── */}
        <div className={styles.howItWorksSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Mecánica del programa</span>
            <h3 className={styles.sectionTitle}>¿Cómo funciona FRGRED?</h3>
          </div>

          {/* 3 Step Cards */}
          <div className={styles.stepsGrid}>
            {steps.map((s) => (
              <div key={s.number} className={styles.stepCard}>
                <div className={styles.stepHeader}>
                  <div className={styles.stepNumberBadge}>{s.number}</div>
                  <div className={styles.stepIcon}>{s.icon}</div>
                </div>
                <h4 className={styles.stepTitle}>{s.title}</h4>
                <p className={styles.stepDescription}>{s.description}</p>
              </div>
            ))}
          </div>

          {/* Gamified 5 Slots Tracker Visualizer */}
          <div className={styles.trackerContainer}>
            <div className={styles.trackerTop}>
              <div className={styles.trackerTitle}>
                <FiUsers className="text-[var(--frg-red)] text-lg" />
                <span>Tu camino hacia el descuento (Meta: 5 referidos concretados)</span>
              </div>
              <span className={styles.trackerBadge}>⚡ Activación Automática</span>
            </div>

            <div className={styles.slotsGrid}>
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className={`${styles.slotItem} ${styles.slotItemActive}`}>
                  <span className={styles.slotIcon}>👤</span>
                  <span className={styles.slotText}>Referido #{num}</span>
                </div>
              ))}
              <div className={`${styles.slotItem} ${styles.slotItemReward}`}>
                <span className={styles.slotIcon}>🎁</span>
                <span className={styles.slotText}>¡PREMIO ACTIVADO!</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── BENEFITS GRID ── */}
        <div className={styles.benefitsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Premios para vos</span>
            <h3 className={styles.sectionTitle}>Tus beneficios exclusivos 🎁</h3>
          </div>

          <div className={styles.benefitsGrid}>
            {/* Benefit 1 */}
            <div className={`${styles.benefitCard} ${styles.benefitCardRed}`}>
              <div className={styles.discountBadge}>
                <span className={`${styles.discountValue} ${styles.discountValueRed}`}>15%</span>
                <span className={styles.discountTag}>OFF</span>
              </div>
              <h4 className={styles.benefitHeading}>En Repuestos Automotrices</h4>
              <p className="text-sm text-[var(--muted)] leading-6">
                Válido para cualquiera de nuestros repuestos y accesorios multimarca de primera calidad.
              </p>
              <div className={styles.benefitConditionBox}>
                <FiDollarSign className={styles.conditionIcon} />
                <span>Condición: Pagando en efectivo o transferencia</span>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className={`${styles.benefitCard} ${styles.benefitCardNavy}`}>
              <div className={styles.discountBadge}>
                <span className={`${styles.discountValue} ${styles.discountValueNavy}`}>20%</span>
                <span className={styles.discountTag}>OFF</span>
              </div>
              <h4 className={styles.benefitHeading}>En Mano de Obra</h4>
              <p className="text-sm text-[var(--muted)] leading-6">
                Aplicable a servicios y reparaciones especializadas realizadas en nuestro taller articulado con Instrumental Luciano.
              </p>
              <div className={styles.benefitConditionBox}>
                <FiTool className={styles.conditionIcon} />
                <span>Condición: En servicios realizados en el taller</span>
              </div>
            </div>
          </div>

          {/* Important Callout */}
          <div className={styles.importantCallout}>
            <span className={styles.calloutIcon}>📌</span>
            <div className={styles.calloutText}>
              <strong>Importante:</strong> El beneficio se activa una vez que tus 5 referidos concretaron su compra o service. <strong>¡No hay límite!</strong> Podés volver a generarlo y acumularlo las veces que quieras.
            </div>
          </div>
        </div>

        {/* ── HIGH IMPACT CTA BOX ── */}
        <div className={styles.ctaBox}>
          <div className={styles.ctaGlowBackground} aria-hidden="true" />
          <div className={styles.ctaContent}>
            <span className={styles.ctaEyebrow}>Comenzá hoy mismo</span>
            <h3 className={styles.ctaTitle}>¿Listo para empezar a ganar con FRGRED?</h3>
            <p className={styles.ctaParagraph}>
              Hacé clic en el botón, contactanos por WhatsApp y te registramos de inmediato para empezar a computar a tus amigos y familiares referidos.
            </p>

            <div className={styles.ctaActions}>
              <a
                id="btn-unirse-frgred"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.ctaMainButton}
                onClick={() => console.log("click: unirse-frgred-cta")}
              >
                🔥 ¡QUIERO SER FRGRED!
              </a>

              <a
                href="#frgred-faq"
                className={styles.ctaSecondaryButton}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("frgred-faq")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <FiHelpCircle /> Preguntas Frecuentes
              </a>
            </div>
          </div>
        </div>

        {/* ── FAQ ACCORDION ── */}
        <div id="frgred-faq" className={styles.faqContainer}>
          <h4 className={styles.faqTitle}>Preguntas frecuentes sobre FRGRED</h4>
          <div className={styles.faqList}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}>
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
