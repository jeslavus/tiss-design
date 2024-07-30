import styles from "./Foreworks.module.sass";

export default function Fireworks(): JSX.Element {
  return (
    <div className={styles.wrap}>
      {Array.from({ length: 400 }, (_, i) => (
        <div key={i} className={styles.c}></div>
      ))}
    </div>
  );
}
