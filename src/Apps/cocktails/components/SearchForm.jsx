import { useGlobalContext } from "../context";
import { useRef, useEffect } from "react";
import styles from "../styles/search_form.module.css";
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className={`${styles.section} ${styles.search}`}>
      <form id={styles["search-form"]} onSubmit={handleSubmit}>
        <div id={styles["form-control"]}>
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id={styles.name}
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}
