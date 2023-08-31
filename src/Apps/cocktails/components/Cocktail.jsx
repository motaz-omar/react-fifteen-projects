import { Link } from "react-router-dom";
import styles from "../styles/cocktail.module.css";
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className={styles.cocktail}>
      <div className={styles["img-container"]}>
        <img src={image} alt={name} />
      </div>
      <div className={styles["cocktail-footer"]}>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/15_cocktail/${id}`} className={styles["btn-details"]}>
          details
        </Link>
      </div>
    </article>
  );
}
