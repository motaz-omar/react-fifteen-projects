import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import data from "./data";
import styles from "./styles/menu_app.module.css";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function MenuApp() {
  const [menuItems, setMenuItems] = useState(data);
  const categories = allCategories;

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section id={`${styles.menu} ${styles.section}`}>
        <div id={styles.title}>
          <h2>our menu</h2>
          <div id={styles.underline}></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MenuApp;
