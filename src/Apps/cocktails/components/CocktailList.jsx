import Cocktail from "./Cocktail";
import { Box, CircularProgress } from "@mui/material";
import { useGlobalContext } from "../context";
import styles from "../styles/cocktail_list.module.css";
export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          height: "100%",
          width: "100%",
        }}
      >
        <CircularProgress size="5rem" />
      </Box>
    );
  }
  if (cocktails.length < 1) {
    return (
      <h2 id={styles["section-title"]}>
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section id={styles.section}>
      <h2 id={styles["section-title"]}>cocktails</h2>
      <div id={styles["cocktails-center"]}>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
