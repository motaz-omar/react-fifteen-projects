import logo from "./images/logo.svg";
import { useGlobalContext } from "./context";
import styles from "./styles/sidebar.module.css";
import { social, links } from "./data";

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const allLinks = links.map((link) => {
    const { id, url, text, icon } = link;
    return (
      <li key={id}>
        <a href={url}>
          {icon}
          {text}
        </a>
      </li>
    );
  });
  const allSocials = social.map((link) => {
    const { id, url, icon } = link;
    return (
      <li key={id}>
        <a href={url}>{icon}</a>
      </li>
    );
  });

  return (
    <aside
      className={
        isSidebarOpen
          ? `${styles.sidebar} ${styles["show-sidebar"]}`
          : styles.sidebar
      }
    >
      <div id={styles["sidebar-header"]}>
        <img src={logo} id={styles[logo]} alt="coding addict" />
        <button id={styles["close-btn"]} onClick={closeSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <ul id={styles.links}>{allLinks}</ul>
      <ul id={styles["social-icons"]}>{allSocials}</ul>
    </aside>
  );
}

export default Sidebar;
