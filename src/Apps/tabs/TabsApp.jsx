import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import styles from "./styles/tabs_app.module.css";
import "@fortawesome/fontawesome-free/js/all.js";

const url = "https://course-api.com/react-tabs-project";

function TabsApp() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    setLoading(true);
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
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

  const { company, dates, duties, title } = jobs[value];

  const allJobs = jobs.map((item, index) => {
    return (
      <button
        key={item.id}
        onClick={() => setValue(index)}
        className={`${styles["job-btn"]} ${
          index === value && styles["active-btn"]
        }`}
      >
        {item.company}
      </button>
    );
  });

  const allDuties = duties.map((duty, index) => {
    return (
      <div key={index} className={styles["job-desc"]}>
        <i className="fa-solid fa-angles-right" id={styles["job-icon"]}></i>
        <p>{duty}</p>
      </div>
    );
  });

  return (
    <section id={styles.section}>
      <div id={styles.title}>
        <h2>experience</h2>
        <div id={styles.underline}></div>
      </div>
      <div id={styles["jobs-center"]}>
        <div id={styles["btn-container"]}>{allJobs}</div>

        <article id={styles["job-info"]}>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p id={styles["job-date"]}>{dates}</p>
          {allDuties}
        </article>
      </div>
      <button type="button" id={styles.btn}>
        more info
      </button>
    </section>
  );
}

export default TabsApp;
