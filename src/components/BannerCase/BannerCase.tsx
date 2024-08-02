import styles from './BannerCase.module.sass';
import Image from "next/image";

interface BannerCaseProps {
  title: string;
  src: string;
  year: number;
}

export default function BannerCase({
  src,
  title,
  year,
}: BannerCaseProps): JSX.Element {
  return (
    <section id="banner_case">
      <div className="container">
        <figure className={styles.figure_case}>
          <Image src={src} width={1400} height={754} alt="Лучшая работа" />
          <figcaption className={styles.case_descr}>
            <h1 className={styles.title_case}>{title}</h1>
            <p className={styles.year}>{year}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
