import { useState } from "react";
import data from "./data";
import List from "./List";
import styles from "./styles/birthday_reminder.module.css";
function BirthdayReminderApp() {
  const [people, setPeople] = useState(data);
  return (
    <main id={styles["birthday-reminder"]}>
      <section id={styles.container}>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default BirthdayReminderApp;
