import styles from "./styles/list.module.css";
function List({ people }) {
  const birthdaysList = people.map((person) => {
    const { id, name, age, image } = person;
    return (
      <article key={id} id={styles.person}>
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </article>
    );
  });

  return <>{birthdaysList}</>;
}

export default List;
