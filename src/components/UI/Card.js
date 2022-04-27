import styles from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={styles.card}>
      <header>
        <h1>{props.title}</h1>
      </header>
      {props.children}
    </div>
  );
};

export default Card;
