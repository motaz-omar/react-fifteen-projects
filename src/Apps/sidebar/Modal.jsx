import { useGlobalContext } from "./context";
import "@fortawesome/fontawesome-free/js/all";
import styles from "./styles/modal.module.css";
function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div
      className={
        isModalOpen
          ? `${styles["modal-overlay"]} ${styles["show-modal"]}`
          : styles["modal-overlay"]
      }
    >
      <div id={styles["modal-container"]}>
        <h3>modal content</h3>
        <button id={styles["close-modal-btn"]} onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default Modal;
