
import styles from "./styles/menu.module.css";
const Menu = ({ items }) => {
  const meals = items.map((menuItem) => {
    const { id, title, img, desc, price } = menuItem;
    return (
      <article key={id} className={styles["menu-item"]}>
        <img src={img} alt={title} className={styles.photo} />
        <div className={styles["item-info"]}>
          <header>
            <h4>{title}</h4>
            <h4 className={styles.price}>${price}</h4>
          </header>
          <p className={styles["item-text"]}>{desc}</p>
        </div>
      </article>
    );
  });
  return <div id={styles["section-center"]}>{meals}</div>;
};

export default Menu;
