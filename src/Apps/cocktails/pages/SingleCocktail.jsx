import { Box, CircularProgress } from "@mui/material";

import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import styles from "../styles/single_cocktail.module.css";
export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);
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
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      cocktail;
    return (
      <>
        <Navbar />
        <section className={`${styles.section} ${styles["cocktail-section"]}`}>
          <Link
            to="/15_cocktail"
            className={`${styles.btn} ${styles["btn-primary"]}`}
          >
            back home
          </Link>
          <h2 className={styles["section-title"]}>{name}</h2>
          <div className={styles.drink}>
            <img src={image} alt={name}></img>
            <div className={styles["drink-info"]}>
              <p>
                <span className={styles["drink-data"]}>name :</span> {name}
              </p>
              <p>
                <span className={styles["drink-data"]}>category :</span>{" "}
                {category}
              </p>
              <p>
                <span className={styles["drink-data"]}>info :</span> {info}
              </p>
              <p>
                <span className={styles["drink-data"]}>glass :</span> {glass}
              </p>
              <p>
                <span className={styles["drink-data"]}>instructons :</span>{" "}
                {instructions}
              </p>
              <p>
                <span className={styles["drink-data"]}>ingredients :</span>
                {ingredients.map((item, index) => {
                  return item ? <span key={index}> {item}</span> : null;
                })}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
