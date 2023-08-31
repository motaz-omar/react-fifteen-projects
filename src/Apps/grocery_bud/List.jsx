import "@fortawesome/fontawesome-free/js/all";
import styles from "./styles/list.module.css";
function List({ items, removeItem, editItem }) {
  const item = items.map((item) => {
    const { id, title } = item;
    return (
      <article className={styles["grocery-item"]} key={id}>
        <p className={styles.title}>{title}</p>
        <div className={styles["btn-container"]}>
          <button
            type="button"
            className={styles["edit-btn"]}
            onClick={() => editItem(id)}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            type="button"
            className={styles["delete-btn"]}
            onClick={() => removeItem(id)}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </article>
    );
  });
  return <div id={styles["grocery-list"]}>{item}</div>;
}

export default List;
