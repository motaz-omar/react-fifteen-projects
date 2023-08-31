import { useState } from "react";
import data from "./data";
import styles from "./styles/lorem_ipsum.module.css";
function LoremIpsumApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  const generatedText = text.map((item, index) => {
    return <p key={index}>{item}</p>;
  });

  return (
    <section id={styles["section-center"]}>
      <h3 id={styles.title}>tired of boring lorem ipsum?</h3>
      <form id={styles["lorem-form"]} onSubmit={handleSubmit}>
        <label htmlFor={styles.amount} id={styles.label}>
          paragraphs:
        </label>
        <input
          type="number"
          name="amount"
          id={styles.amount}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button id={styles.btn}>generate</button>
      </form>
      <article id={styles["lorem-text"]}>{generatedText}</article>
    </section>
  );
}

export default LoremIpsumApp;
