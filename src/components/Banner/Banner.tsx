import Fireworks from "../Fireworks/Fireworks";
import styles from "./Banner.module.sass";

interface BannerProps {
  title: string;
  link: boolean;
}

export default function Banner({title, link}: BannerProps):JSX.Element {
  return (
    <section id="banner">
      <div className={`${styles.general_banner} container`}>
        <Fireworks />
        <h1 className={styles.banner_title}>{title}</h1>
        {link && <a href="#best_works" className={styles.subtitle_banner_link}>Лучшие работы</a>}
      </div>
    </section>
  );
}
