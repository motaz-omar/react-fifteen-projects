import { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import styles from "./styles/color_generator.module.css";
function ColorGeneratorApp() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  const allColors = list.map((color, index) => {
    return (
      <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
    );
  });
  return (
    <>
      <section id={styles.container}>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? styles.error : null}`}
            id={styles.input}
          />
          <button id={styles.btn} type="submit">
            submit
          </button>
        </form>
      </section>
      <section id={styles.colors}>{allColors}</section>
    </>
  );
}

export default ColorGeneratorApp;
