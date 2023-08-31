import { useState } from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "./styles/slider_app.module.css";
import data from "./data";
function SliderApp() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % data.length;
      return result;
    });
  };

  const prevSlide = () => {
    setIndex((oldIndex) => {
      const result = (oldIndex - 1 + data.length) % data.length;
      return result;
    });
  };

  const allPeople = data.map((person, personIndex) => {
    const { id, image, name, title, quote } = person;

    let position = "nextSlide";
    if (personIndex === index) {
      position = styles.activeSlide;
    }
    if (
      personIndex === index - 1 ||
      (index === 0 && personIndex === data.length - 1)
    ) {
      position = styles.lastSlide;
    }

    return (
      <article id={styles["slider-article"]} className={position} key={id}>
        <img src={image} alt={name} className={styles["person-img"]} />
        <h4>{name}</h4>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{quote}</p>
        <i className="fa-solid fa-quote-right"></i>
      </article>
    );
  });

  return (
    <section id={styles.section}>
      <div id={styles.title}>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div id={styles["section-center"]}>
        {allPeople}
        <button id={styles.prev} onClick={prevSlide}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button id={styles.next} onClick={nextSlide}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
}

export default SliderApp;
