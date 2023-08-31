import { useState } from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "./styles/question.module.css";
function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className={styles.question}>
      <header>
        <h4>{title}</h4>
        <button className={styles.btn} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <i className="fa-solid fa-minus"></i>
          ) : (
            <i className="fa-solid fa-plus"></i>
          )}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default Question;
