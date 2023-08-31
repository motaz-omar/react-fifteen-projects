import { useState } from "react";
import styles from "./styles/tour.module.css";
function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className={styles["single-tour"]}>
      <img src={image} alt={name} />
      <footer>
        <div className={styles["tour-info"]}>
          <h4>{name}</h4>
          <h4 className={styles["tour-price"]}>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button className={styles["delete-btn"]} onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
}

export default Tour;
