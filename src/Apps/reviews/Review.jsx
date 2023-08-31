import { useState } from "react";
import people from "./data";
import "@fortawesome/fontawesome-free/js/all.js";

import styles from "./styles/review.module.css";
function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article id={styles.review}>
      <div id={styles["img-container"]}>
        <img src={image} alt={name} id={styles["person-img"]} />
        <span id={styles["quote-icon"]}>
          <i className="fa-solid fa-quote-right" id={styles["quote-icon"]}></i>
        </span>
      </div>
      <h4 id={styles.author}>{name}</h4>
      <p id={styles.job}>{job}</p>
      <p id={styles.info}>{text}</p>
      <div id={styles["button-container"]}>
        <button id={styles["prev-btn"]} onClick={prevPerson}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button id={styles["next-btn"]} onClick={nextPerson}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <button id={styles["random-btn"]} onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}

export default Review;
