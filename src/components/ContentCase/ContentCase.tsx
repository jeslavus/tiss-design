import styles from "./ContentCase.module.sass";

interface ContentCaseProps {
  task: string;
  goal: string;
  url: string;
}

export default function ContentCase({
  task,
  goal,
  url,
}: ContentCaseProps): JSX.Element {
  return (
    <section id="content_case">
      <div className={`container ${styles.content_case_wrap}`}>
        <div className={styles.content_case_wrap_txt}>
          <div className={styles.content_case_txt_block}>
            <h2 className={styles.content_case_txt_block_title}>Задача:</h2>
            <p className={styles.content_case_txt_block_txt}>{task}</p>
          </div>
          <div className={styles.content_case_txt_block}>
            <h2 className={styles.content_case_txt_block_title}>Цель:</h2>
            <p className={styles.content_case_txt_block_txt}>{goal}</p>
          </div>
        </div>
        <a href={url} className={styles.content_case_link} target="_blank" rel="noopener noreferrer">
          <span>на сайт</span>
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
        </a>
      </div>
    </section>
  );
}
