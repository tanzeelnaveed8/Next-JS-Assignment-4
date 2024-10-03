import styles from './card.module.css'; // Use the correct import for styles

interface CardProps {
  name: string;
  className: string; 
  rollno: number;
  campus : string;
  city : string
}

function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>ID Card</div>
      <h2 className={styles.name}>{props.name}</h2>
      <div className={styles.divider}></div>
      <p className={styles.class}>Class: {props.className}</p>
      <p className={styles.rollno}>Roll No: {props.rollno}</p>
      <p className={styles.campus}>Campus : {props.campus}</p>
      <p className={styles.city}>City : {props.city}</p>
      <div className={styles.footer}>GIAIC STUDENT Q2 </div>
    </div>
  );
}

export default Card;



