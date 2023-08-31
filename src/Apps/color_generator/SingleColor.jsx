import { useState, useEffect } from "react";

import styles from "./styles/single_color.module.css";
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");

  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`${styles.color} ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className={styles["percent-value"]}>{weight}%</p>
      <p className={styles["color-value"]}>{hexValue}</p>
      {alert && <p className={styles.alert}>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
