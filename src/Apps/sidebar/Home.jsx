import "@fortawesome/fontawesome-free/js/all";
import styles from "./styles/home.module.css";
import { useGlobalContext } from "./context";

function Home() {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main id={styles.main}>
      <button onClick={openSidebar} id={styles["sidebar-toggle"]}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <button onClick={openModal} id={styles.btn}>
        show modal
      </button>
    </main>
  );
}

export default Home;
