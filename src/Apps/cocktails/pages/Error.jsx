import { Link } from "react-router-dom";
import styles from "../styles/error.module.css";
export default function Error() {
  return (
    <section className={`${styles["error-page"]} ${styles.section}`}>
      <div id="error-container">
        <h1>oops! it's a dead end</h1>
        <Link
          to="/15_cocktail"
          className={`${styles.btn} ${styles["btn-primary"]}`}
        >
          back home
        </Link>
      </div>
    </section>
  );
}
