
import styles from "./styles/categories.module.css";
const Categories = ({ categories, filterItems }) => {
  const allCategories = categories.map((category, index) => {
    return (
      <button
        type="button"
        className={styles["filter-btn"]}
        key={index}
        onClick={() => filterItems(category)}
      >
        {category}
      </button>
    );
  });
  return <div id={styles["btn-container"]}>{allCategories}</div>;
};

export default Categories;
