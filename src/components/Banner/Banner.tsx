import Fireworks from "../Fireworks/Fireworks";
import styles from "./Banner.module.sass";

export default function Banner():JSX.Element {
  return (
    <section id="banner">
      <div className={`${styles.general_banner} container`}>
        <Fireworks />
        <h1 className={styles.banner_title}>
          UI/UX & digital
          <br />
          designer
        </h1>
        <a href="#best_works" className={styles.subtitle_banner_link}>
          Лучшие работы
        </a>
      </div>
    </section>
  );
}
