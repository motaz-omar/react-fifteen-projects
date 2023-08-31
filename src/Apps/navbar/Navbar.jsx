import { useState, useRef, useEffect } from "react";
import "@fortawesome/fontawesome-free/js/all";
import { links, social } from "./data";
import logo from "./images/logo.svg";
import styles from "./styles/navbar.module.css";
function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);

  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  const allLinks = links.map((link) => {
    const { id, url, text } = link;
    return (
      <li key={id}>
        <a href={url}>{text}</a>
      </li>
    );
  });

  const allSocial = social.map((socialIcon) => {
    const { id, url, icon } = socialIcon;
    return (
      <li key={id}>
        <a href={url}>{icon}</a>
      </li>
    );
  });

  return (
    <nav id={styles.nav}>
      <div id={styles["nav-center"]}>
        <div id={styles["nav-header"]}>
          <img src={logo} className="logo" alt="logo" />
          <button id={styles["nav-toggle"]} onClick={toggleLinks}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
        <div id={styles["links-container"]} ref={linksContainerRef}>
          <ul id={styles.links} ref={linksRef}>
            {allLinks}
          </ul>
        </div>
        <ul id={styles["social-icons"]}>{allSocial}</ul>
      </div>
    </nav>
  );
}

export default Navbar;
