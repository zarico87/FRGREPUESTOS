import { FiMapPin, FiUsers, FiStar, FiTool, FiShield, FiPhone } from "react-icons/fi";
import Seo from "../components/Seo";
import styles from "./Nosotros.module.css";

const values = [
  {
    icon: <FiUsers />,
    title: "Atención cercana y personalizada",
    text: "Nos tomamos el tiempo para escucharte y orientarte con la información que necesitás.",
  },
  {
    icon: <FiTool />,
    title: "+50 años de experiencia articulada",
    text: "Trabajamos junto a Instrumental Luciano, un taller con más de medio siglo en la zona de Bv. Las Heras.",
  },
  {
    icon: <FiStar />,
    title: "Repuestos multimarca de calidad",
    text: "Contamos con variedad para distintas marcas, modelos y años. Siempre buscamos la mejor opción para tu vehículo.",
  },
  {
    icon: <FiShield />,
    title: "Confianza y transparencia",
    text: "Te decimos lo que sabemos, sin vueltas. Si no lo tenemos, te orientamos a dónde conseguirlo.",
  },
];

export default function Nosotros() {
  return (
    <>
      <Seo
        title="Nosotros"
        description="Conocé FRGREPUESTOS: trabajo articulado con Instrumental Luciano, +50 años de experiencia en BV Las Heras, Córdoba Capital. Repuestos multimarca y atención personalizada."
        path="/nosotros"
      />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={`container-frg ${styles.heroInner}`}>
          <div>
            <span className={styles.eyebrow}>Quiénes somos</span>
            <h1 className={styles.heroTitle}>
              Más que repuestos,<br />
              <span>un equipo que te acompaña.</span>
            </h1>
            <p className={styles.heroText}>
              En FRGREPUESTOS nos gusta hacer las cosas de manera simple: escucharte, entender qué
              necesitás y ayudarte a encontrar la solución correcta para tu vehículo. Sin vueltas,
              con buena onda y experiencia de verdad.
            </p>
            <div className={styles.heroBadge}>
              <FiMapPin />
              Mariano Fragueiro 653 · B° Ducasse · Córdoba Capital
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <h3>Nuestro diferencial</h3>
              <p>
                Trabajamos de manera articulada con <strong>Instrumental Luciano</strong>, uno de los
                talleres con más trayectoria de la zona de Bv. Las Heras en Córdoba Capital.
              </p>
              <div className={styles.statGrid}>
                <div className={styles.stat}>
                  <span className={styles.statNum}>+50</span>
                  <span className={styles.statLabel}>Años de experiencia</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>100%</span>
                  <span className={styles.statLabel}>Multimarca</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>2</span>
                  <span className={styles.statLabel}>Equipos unidos</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNum}>1</span>
                  <span className={styles.statLabel}>Solo objetivo: tu auto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HISTORIA ── */}
      <section className={styles.story}>
        <div className={`container-frg ${styles.storyGrid}`}>
          <div>
            <span className={styles.storyLabel}>Nuestra historia</span>
            <h2 className={styles.storyTitle}>De la confianza<br />nace el trabajo en equipo.</h2>
            <p className={styles.storyText}>
              FRGREPUESTOS nació de la idea de acercar repuestos de calidad con una atención que
              realmente te ayude a entender qué necesitás para tu vehículo.
            </p>
            <p className={styles.storyText}>
              Trabajamos de manera articulada con{" "}
              <strong>Instrumental Luciano</strong>, un taller con más de{" "}
              <strong>50 años de experiencia</strong> en la zona de{" "}
              <strong>Bv. Las Heras, Córdoba Capital</strong>. Esta alianza nos permite
              complementar el mundo del repuesto con el del diagnóstico y la reparación.
            </p>
            <p className={styles.storyText}>
              Hoy atendemos desde Mariano Fragueiro 653, B° Ducasse, y seguimos creciendo
              gracias a la confianza de cada cliente que elige consultarnos.
            </p>
            <div className={styles.highlightBox}>
              <p>
                🔧 Si tenés una duda, una consulta o simplemente querés saber cuánto puede
                costarte un repuesto — ¡escribinos! Estamos para ayudarte sin compromiso.
              </p>
            </div>
          </div>

          <div className={styles.values}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon}>{v.icon}</span>
                <div className={styles.valueText}>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REDES SOCIALES ── */}
      <section className={styles.social}>
        <div className="container-frg">
          <h2>Seguinos en redes sociales</h2>
          <p>
            Compartimos los trabajos que vamos haciendo, novedades y también podés
            mandarnos tus consultas directamente desde Instagram o Facebook. ¡Te esperamos! 😊
          </p>
          <div className={styles.socialBtns}>
            <a
              id="btn-nosotros-instagram"
              href="https://www.instagram.com/frgrepuestos/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
              onClick={() => console.log("click: instagram")}
            >
              <img src="/img/logos/logoinstagram.png" alt="Instagram" />
              @frgrepuestos
            </a>
            <a
              id="btn-nosotros-facebook"
              href="https://www.facebook.com/profile.php?id=61562034547817"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
              onClick={() => console.log("click: facebook")}
            >
              <img src="/img/logos/logofacebook.png" alt="Facebook" />
              Frgrepuestos
            </a>
            <a
              id="btn-nosotros-whatsapp"
              href="https://wa.me/5493517368376"
              target="_blank"
              rel="noreferrer"
              className={styles.socialBtn}
              onClick={() => console.log("click: whatsapp")}
            >
              <img src="/img/logos/logowhatsapp.png" alt="WhatsApp" />
              Escribinos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
