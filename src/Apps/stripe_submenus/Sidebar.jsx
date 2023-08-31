import { useGlobalContext } from "./context";
import sublinks from "./data";
import styles from "./styles/sidebar.module.css";
import "@fortawesome/fontawesome-free/js/all";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  const allSubLinks = sublinks.map((item, index) => {
    const { links, page } = item;
    return (
      <article key={index}>
        <h4>{page}</h4>
        <div className={styles["sidebar-sublinks"]}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </article>
    );
  });

  return (
    <div
      className={
        isSidebarOpen
          ? `${styles["sidebar-wrapper"]} ${styles.show}`
          : styles["sidebar-wrapper"]
      }
    >
      <aside id={styles.sidebar}>
        <button id={styles["close-btn"]} onClick={closeSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div id={styles["sidebar-links"]}>{allSubLinks}</div>
      </aside>
    </div>
  );
};

export default Sidebar;
