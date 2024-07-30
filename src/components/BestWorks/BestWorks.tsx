import Image from "next/image";
import styles from './BestWorks.module.sass';

interface Work {
  src: string;
  title: string;
  description: string;
  year: number;
}

const works: Work[] = [
  {
    src: "/best-works-img/bank.png",
    title: "Банк Фирм",
    description: "UI/UX design, Branding, Guideline",
    year: 2021,
  },
  {
    src: "/best-works-img/qtec.png",
    title: "Qtec",
    description: "UI/UX design",
    year: 2022,
  },
  {
    src: "/best-works-img/natt.png",
    title: "Цифровая платформа НАТТ",
    description: "UI/UX design",
    year: 2020,
  },
  {
    src: "/best-works-img/rusnatt.png",
    title: "RusНАТТ",
    description: "UI/UX design",
    year: 2021,
  },
  {
    src: "/best-works-img/svs.png",
    title: "SVSmotors",
    description: "Landing",
    year: 2023,
  },
];

export default function BestWorks(): JSX.Element {
  return (
    <section id="best_works">
      <div className="container">
        <ul className={`${styles.header_list} reset_ul`}>
          {works.map((work, index) => (
            <li key={index} className={styles.best_works_list_item}>
              <figure className={styles.best_work_figure}>
                <Image
                  src={work.src}
                  width={738}
                  height={500}
                  alt="Лучшая работа"
                  className={styles.best_work_img}
                />
                <figcaption>
                  <h3 className={styles.best_work_name}>{work.title} /</h3>
                  <p className={styles.best_work_descr}>{work.description}</p>
                  <p className={styles.best_work_year}>{work.year}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
