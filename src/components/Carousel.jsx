import styles from "./Carousel.module.css";

const brands = [
  { name: "Volkswagen", src: "/img/marcas/vw.png" },
  { name: "Ford",        src: "/img/marcas/ford.png" },
  { name: "Renault",     src: "/img/marcas/renault.png" },
  { name: "Fiat",        src: "/img/marcas/fiat.png" },
  { name: "Citroën",     src: "/img/marcas/citroen.png" },
  { name: "Chevrolet",   src: "/img/marcas/chevro.png" },
  { name: "Toyota",      src: "/img/marcas/toyota.png" },
];

// Duplicamos la lista para que el scroll sea continuo sin salto
const doubled = [...brands, ...brands];

export default function Carousel() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Trabajamos con todas las marcas</p>
      <div className={styles.track} aria-hidden="true">
        {doubled.map((brand, i) => (
          <div key={`${brand.name}-${i}`} className={styles.logoItem} title={brand.name}>
            <img
              src={brand.src}
              alt={brand.name}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
