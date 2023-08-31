import Navbar from "../components/Navbar";
import styles from "../styles/about.module.css";
export default function About() {
  return (
    <>
      <Navbar />
      <section className={`${styles.section} ${styles["about-section"]}`}>
        <h1 id={styles["section-title"]}>about us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          repudiandae architecto qui adipisci in officiis, aperiam sequi atque
          perferendis eos, autem maiores nisi saepe quisquam hic odio
          consectetur nobis veritatis quasi explicabo obcaecati doloremque?
          Placeat ratione hic aspernatur error blanditiis?
        </p>
      </section>
    </>
  );
}
