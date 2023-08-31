import data from "./data";
import SingleQuestion from "./Question";
import styles from "./styles/accordion.module.css";
function AccordionApp() {
  const questions = data.map((question) => {
    return <SingleQuestion key={question.id} {...question}></SingleQuestion>;
  });
  return (
    <div id={styles.body}>
      <main id={styles.accordion}>
        <div id={styles.container}>
          <h3>questions and answers about login</h3>
          <section id={styles.info}>{questions}</section>
        </div>
      </main>
    </div>
  );
}

export default AccordionApp;
