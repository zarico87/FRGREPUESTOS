import { FiArrowUpRight } from "react-icons/fi";
import {
  FiTool, FiZap, FiDroplet, FiActivity,
  FiShield, FiSearch, FiTruck, FiDisc, FiSettings
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "../components/Seo";
import styles from "./Services.module.css";

const services = [
  {
    icon: <FiTool />,
    title: "Reparación de tableros",
    description: "Diagnóstico y reparación de instrumental de tablero para recuperar su correcto funcionamiento.",
    tag: "Electrónica",
  },
  {
    icon: <FiZap />,
    title: "Iluminación de tableros",
    description: "Revisión y solución de problemas de iluminación e indicadores del panel de instrumentos.",
    tag: "Eléctrico",
  },
  {
    icon: <FiActivity />,
    title: "Reparación de limpiaparabrisas",
    description: "Revisión del sistema de limpiaparabrisas y reparación de fallas mecánicas o eléctricas.",
    tag: "Sistemas",
  },
  {
    icon: <FiDroplet />,
    title: "Service de filtros y aceite",
    description: "Mantenimiento periódico para cuidar el motor y prolongar su buen funcionamiento.",
    tag: "Mantenimiento",
  },
  {
    icon: <FiSettings />,
    title: "DPF OFF y EGR para diésel",
    description: "Servicio orientado a sistemas electrónicos de vehículos diésel, sujeto a diagnóstico y normativa.",
    tag: "Diésel",
  },
  {
    icon: <FiSearch />,
    title: "Scaneo y eliminación de fallas",
    description: "Diagnóstico electrónico y revisión de códigos de falla con equipo de escaneo profesional.",
    tag: "Diagnóstico",
  },
  {
    icon: <FiTruck />,
    title: "Asistencia para compra de vehículos",
    description: "Acompañamiento técnico para revisar el estado del vehículo antes de comprarlo.",
    tag: "Asesoría",
  },
  {
    icon: <FiShield />,
    title: "Service de frenos",
    description: "Revisión y mantenimiento completo del sistema de frenos y sus componentes.",
    tag: "Seguridad",
  },
  {
    icon: <FiDisc />,
    title: "Mecánica ligera",
    description: "Trabajos de mantenimiento y reparación general para necesidades frecuentes del vehículo.",
    tag: "General",
  },
];

function handleServiceClick(title) {
  window.open(
    `https://wa.me/5493517368376?text=Hola!%20Quiero%20consultar%20por%20el%20servicio%3A%20${encodeURIComponent(title)}`,
    "_blank"
  );
}

export default function Services() {
  return (
    <>
      <Seo
        title="Servicios"
        description="Servicios automotrices FRGREPUESTOS: tableros, limpiaparabrisas, service filtros y aceite, DPF OFF EGR, escaneo de fallas, frenos, mecánica ligera y más en Córdoba Capital."
        path="/servicios"
      />

      {/* HERO */}
      <section className={styles.pageHero}>
        <div className={`container-frg ${styles.pageHeroInner}`}>
          <span className={styles.eyebrow}>Servicios</span>
          <h1 className={styles.pageTitle}>Más que repuestos: soluciones</h1>
          <p className={styles.pageSubtitle}>
            Combinamos repuestos, diagnóstico y experiencia para ayudarte a resolver
            lo que tu vehículo necesita. Hacé clic en cualquier servicio para consultarnos.
          </p>
        </div>
      </section>

      {/* GRID DE SERVICIOS */}
      <section className="container-frg section-pad">
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={service.title}
              id={`service-card-${index}`}
              className={styles.serviceCard}
              style={{ "--delay": `${index * 60}ms` }}
              onClick={() => handleServiceClick(service.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleServiceClick(service.title)}
              aria-label={`Consultar por ${service.title}`}
            >
              <div className={styles.cardIconWrap}>
                <span className={styles.cardIcon}>{service.icon}</span>
                <span className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.cardAccent} />
              </div>
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{service.title}</h2>
                <p className={styles.cardDesc}>{service.description}</p>
                <span className={styles.cardCta}>
                  Consultar <FiArrowUpRight />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={styles.ctaBanner}>
          <div className={styles.ctaText}>
            <h3>¿Necesitás un servicio?</h3>
            <p>Escribinos por WhatsApp y te respondemos a la brevedad.</p>
          </div>
          <a
            id="btn-servicios-whatsapp"
            href="https://wa.me/5493517368376?text=Hola!%20Necesito%20información%20sobre%20sus%20servicios."
            target="_blank"
            rel="noreferrer"
            className={styles.ctaBtn}
            onClick={() => console.log("click: servicios-whatsapp")}
          >
            <FaWhatsapp size={20} /> Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}