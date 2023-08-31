import Review from "./Review";
import styles from "./styles/reviews.module.css";

function ReviewsApp() {
  return (
    <main id={styles.reviews}>
      <section id={styles.container}>
        <div id={styles.title}>
          <h2>our reviews</h2>
          <div id={styles.underline}></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default ReviewsApp;
