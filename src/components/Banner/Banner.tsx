import styles from "./Banner.module.sass";

export default function Banner() {
  return (
    <section id="banner">
      <div className={`${styles.general_banner} container`}>
        {/* <div className={styles.fireworks_wrap}>
          
        </div> */}
        <div className={styles.wrap}>
            {Array.from({ length: 400 }, (_, i) => (
              <div key={i} className={styles.c}></div>
            ))}
          </div>
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
