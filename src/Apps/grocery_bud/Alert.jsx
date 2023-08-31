import  { useEffect } from "react";
import styles from "./styles/alert.module.css";
function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);
  return (
    <p id={styles.alert} className={styles[`alert-${type}`]}>
      {msg}
    </p>
  );
}

export default Alert;
