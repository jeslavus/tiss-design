import Image from "next/image";
import styles from './BestWorks.module.sass';
import Works from '@/json/cases.json';
import Link from "next/link";

interface Work {
  src: string;
  title: string;
  description: string;
  year: number;
  slug: string,
  parent: string
}

export default function BestWorks(): JSX.Element {
  const works: Work[] = Works;

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
                  <Link href={`${work.parent}/${work.slug}/`}>Подробнее</Link>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
