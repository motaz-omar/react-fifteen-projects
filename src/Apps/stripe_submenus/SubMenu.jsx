import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import styles from "./styles/submenu.module.css";
function SubMenu() {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);
  const allLinks = links.map((link, index) => {
    const { url, icon, label } = link;
    return (
      <a key={index} href={url}>
        {icon}
        {label}
      </a>
    );
  });
  return (
    <aside
      className={
        isSubmenuOpen ? `${styles.submenu} ${styles.show}` : styles.submenu
      }
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`${styles["submenu-center"]} ${columns}`}>
          {allLinks}
        </div>
      </section>
    </aside>
  );
}

export default SubMenu;
