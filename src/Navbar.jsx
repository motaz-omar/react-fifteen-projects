import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <div id={styles.navbar}>
      <Link className={styles.btn} to={"/1_birthday_reminder"}>
        Birthday reminder
      </Link>
      <Link className={styles.btn} to={"/2_tours"}>
        Tours
      </Link>
      <Link className={styles.btn} to={"/3_reviews"}>
        Reviews
      </Link>
      <Link className={styles.btn} to={"/4_accordion"}>
        Accordion
      </Link>
      <Link className={styles.btn} to={"/5_menu"}>
        Menu
      </Link>
      <Link className={styles.btn} to={"/6_tabs"}>
        Tabs
      </Link>
      <Link className={styles.btn} to={"/7_slider"}>
        Slider
      </Link>
      <Link className={styles.btn} to={"/8_lorem-ipsum"}>
        Lorem ipsum
      </Link>
      <Link className={styles.btn} to={"/9_color-generator"}>
        Color generator
      </Link>
      <Link className={styles.btn} to={"/10_grocery-bud"}>
        Grocery bud
      </Link>
      <Link className={styles.btn} to={"/11_navbar"}>
        Navbar
      </Link>
      <Link className={styles.btn} to={"/12_sidebar"}>
        Sidebar
      </Link>
      <Link className={styles.btn} to={"/13_stripe-submenus"}>
        Stripe submenus
      </Link>
      <Link className={styles.btn} to={"/14_cart"}>
        Cart
      </Link>
      <Link className={styles.btn} to={"/15_cocktail"}>
        cocktails
      </Link>
    </div>
  );
}

export default Navbar;
