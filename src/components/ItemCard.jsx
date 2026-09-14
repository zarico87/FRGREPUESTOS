import { FiArrowUpRight } from "react-icons/fi";
import styles from "./ItemCard.module.css";

export default function ItemCard({ title, description, image, index = 0, onClick }) {
  return (
    <article
      className={styles.card}
      style={{ "--delay": `${index * 70}ms` }}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
    >
      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.src = "/img/placeholder.svg";
          }}
        />
        <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <span className={styles.detail}>Consultar <FiArrowUpRight /></span>
      </div>
    </article>
  );
}