import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "../components/Seo";
import Carousel from "../components/Carousel";
import styles from "./Products.module.css";
import cardStyles from "../components/ItemCard.module.css";

const products = [
  {
    title: "Tren Delantero",
    description: "Componentes para suspensión y dirección, pensados para mantener seguridad y confort en cada kilómetro.",
    image: "/img/REPUESTOS/trendelantero.png",
    tag: "Suspensión",
  },
  {
    title: "Kit de Distribución",
    description: "Correas, tensores y componentes para el mantenimiento del sistema de distribución de tu motor.",
    image: "/img/REPUESTOS/kitdistribucion.jpeg",
    tag: "Motor",
  },
  {
    title: "Kits de Embrague",
    description: "Opciones multimarca para reemplazos y mantenimiento del sistema de embrague.",
    image: "/img/REPUESTOS/kitdeembrague.jpeg",
    tag: "Transmisión",
  },
  {
    title: "Filtros y Aceites",
    description: "Filtros y lubricantes para acompañar el mantenimiento periódico del vehículo.",
    image: "/img/REPUESTOS/filtrosyaceites.png",
    tag: "Mantenimiento",
  },
  {
    title: "Amortiguadores",
    description: "Soluciones para recuperar estabilidad, confort y respuesta en la conducción.",
    image: "/img/REPUESTOS/amortiguadores.jpg",
    tag: "Suspensión",
  },
  {
    title: "Frenos",
    description: "Pastillas, discos y componentes para el sistema de frenado. Seguridad ante todo.",
    image: "/img/REPUESTOS/frenos.jpeg",
    tag: "Seguridad",
  },
  {
    title: "Bombas de Agua",
    description: "Componentes para el circuito de refrigeración y mantenimiento preventivo del motor.",
    image: "/img/REPUESTOS/bombadeagua.jpeg",
    tag: "Refrigeración",
  },
  {
    title: "Autopartes Multimarca",
    description: "Variedad de piezas y accesorios para distintas marcas y modelos. Consultanos.",
    image: "/img/REPUESTOS/optica.png",
    tag: "General",
  },
];

function handleCardClick(title) {
  window.open(
    `https://wa.me/5493517368376?text=Hola!%20Quiero%20consultar%20por%20${encodeURIComponent(title)}`,
    "_blank"
  );
}

export default function Products() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <Seo
        title="Productos"
        description="FRGREPUESTOS: repuestos multimarca en Córdoba Capital. Tren delantero, distribución, embrague, filtros, aceites, amortiguadores, frenos, bombas de agua y autopartes."
        path="/productos"
      />

      {/* HERO */}
      <section className={styles.pageHero}>
        <div className={`container-frg ${styles.pageHeroInner}`}>
          <span className={styles.eyebrow}>Catálogo</span>
          <h1 className={styles.pageTitle}>Repuestos para cada necesidad</h1>
          <p className={styles.pageSubtitle}>
            Una selección de nuestras principales categorías. Consultanos por marca, modelo, año
            y motorización — te ayudamos a encontrar la opción adecuada.
          </p>
        </div>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="container-frg section-pad">
        <div className={styles.grid}>
          {products.map((product, index) => (
            <article
              key={product.title}
              id={`product-card-${index}`}
              className={cardStyles.card}
              style={{ "--delay": `${index * 60}ms` }}
              onClick={() => handleCardClick(product.title)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleCardClick(product.title)}
              aria-label={`Consultar por ${product.title}`}
            >
              <div className={cardStyles.imageWrap}>
                <img
                  src={product.image}
                  alt={product.title}
                  className={cardStyles.image}
                  loading="lazy"
                  onError={(e) => { e.currentTarget.src = "/img/placeholder.svg"; }}
                />
                <span className={cardStyles.number}>{String(index + 1).padStart(2, "0")}</span>
                <span className={cardStyles.tag}>{product.tag}</span>
              </div>
              <div className={cardStyles.content}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <span className={cardStyles.detail}>
                  Consultar por WhatsApp <FiArrowUpRight />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CARRUSEL DE MARCAS */}
        <div className={styles.carouselWrapper}>
          <Carousel />
        </div>
      </section>
    </>
  );
}