import logo from "./images/logo.svg";
import "@fortawesome/fontawesome-free/js/all";

import { useGlobalContext } from "./context";
import styles from "./styles/navbar.module.css";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav id={styles.nav} onMouseOut={handleSubmenu}>
      <div id={styles["nav-center"]}>
        <div id={styles["nav-header"]}>
          <img src={logo} id={styles["nav-logo"]} alt="" />
          <button
            className={`${styles.btn} ${styles["toggle-btn"]}`}
            onClick={openSidebar}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <ul id={styles["nav-links"]}>
          <li>
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className={styles["link-btn"]} onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className={` ${styles.btn} ${styles["signin-btn"]}`}>
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
