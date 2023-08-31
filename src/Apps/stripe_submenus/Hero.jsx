import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";
import styles from "./styles/hero.module.css";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section id={styles.hero} onMouseOver={closeSubmenu}>
      <div id={styles["hero-center"]}>
        <article id={styles["hero-info"]}>
          <h1>
            Payments infrastructure <br />
            for the internet
          </h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button id={styles.btn}>Start now</button>
        </article>
        <article id={styles["hero-images"]}>
          <img src={phoneImg} id={styles["phone-img"]} alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
