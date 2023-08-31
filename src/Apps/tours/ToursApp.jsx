import { useState, useEffect } from "react";
import Tours from "./Tours";
import { Box, CircularProgress } from "@mui/material";
import styles from "./styles/tours_app.module.css"
const url = "https://course-api.com/react-tours-project";

function ToursApp() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
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
  if (tours.length === 0) {
    return (
      <main>
        <div id={styles.title}>
          <h2>no tours left</h2>
          <button id={styles.btn} onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main id={styles["tours-app"]}>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default ToursApp;
