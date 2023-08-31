import Tour from "./Tour";
import styles from "./styles/tours.module.css";
function Tours({ tours, removeTour }) {
  const allTours = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
  });
  return (
    <section>
      <div id={styles.title}>
        <h2>our tours</h2>
        <div id={styles.underline}></div>
      </div>
      <div>{allTours}</div>
    </section>
  );
}

export default Tours;
