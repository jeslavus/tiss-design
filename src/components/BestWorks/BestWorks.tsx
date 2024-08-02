import Image from "next/image";
import Link from "next/link";
import styles from "./BestWorks.module.sass";
import Works from "@/json/cases.json";

interface BestWorksProps {
  count?: number;
}

export default function BestWorks({ count }: BestWorksProps): JSX.Element {
  const displayCount = count ?? Works.length;

  return (
    <section id="best_works">
      <div className="container">
        <ul className={`${styles.header_list} reset_ul`}>
          {Works.slice(0, displayCount).map((work, index) => (
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
                  <h3 className={styles.best_work_name}>{work.title}</h3>
                  <p className={styles.best_work_descr}>{work.description}</p>
                  <p className={styles.best_work_year}>{work.year}</p>
                  <Link className={styles.best_work_link} href={`${work.parent}/${work.slug}/`}>
                    <span>Подробнее</span>
                    <svg
                      width="33"
                      height="8"
                      viewBox="0 0 33 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5H32V3.5H0L0 4.5Z"
                        fill="#E7E7E7"
                      />
                    </svg>
                  </Link>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        {displayCount < Works.length && (
          <Link href="/cases/" className={styles.all_cases}>
            Все работы
          </Link>
        )}
      </div>
    </section>
  );
}
