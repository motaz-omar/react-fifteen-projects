import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <nav id={styles.navbar}>
      <div id={styles["nav-center"]}>
        <Link to="/15_cocktail">
          <img src={logo} alt="cocktail db logo" id={styles.logo} />
        </Link>
        <ul id={styles["nav-links"]}>
          <li>
            <Link to="/15_cocktail">home</Link>
          </li>
          <li>
            <Link to="/15_cocktail/about">about</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
