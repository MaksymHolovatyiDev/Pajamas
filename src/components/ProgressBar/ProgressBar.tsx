import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';
import QuestionMark from './assets/question-mark.svg';

interface ProgressBarProps {
  color?: 'white' | 'black' | 'blue';
  percentage: number;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  spent?: string;
  spentValue?: string;
  est?: string;
  estValue?: string;
}

export function ProgressBar({
  color = 'white',
  title,
  spent,
  spentValue,
  est,
  estValue,
  percentage,
  size,
}: ProgressBarProps) {
  return title ? (
    <div className={`${styles.container} ${styles[`container-${color}`]}`}>
      <div className={styles['container-base']}>
        <p className={`${styles.title} ${styles[`title-${color}`]}`}>{title}</p>
        <ReactSVG src={QuestionMark} className={styles[`svg-${color}`]} />
      </div>
      <div className={`${styles.thumb} ${styles[`thumb-${size}`]}`}>
        <div
          style={{width: percentage + '%'}}
          className={`${styles.progress} ${styles[`progress-${size}`]}`}
        />
      </div>
      <div className={styles['container-base']}>
        <p className={`${styles['time-text']} ${styles[`time-text-${color}`]}`}>
          {spent} <span className={styles[`value-${color}`]}>{spentValue}</span>
        </p>
        <p className={`${styles['time-text']} ${styles[`time-text-${color}`]}`}>
          {est} <span className={styles[`value-${color}`]}>{estValue}</span>
        </p>
      </div>
    </div>
  ) : (
    <div
      className={`${styles.thumb} ${styles.width} ${styles[`thumb-${size}`]}`}>
      <div
        style={{width: percentage + '%'}}
        className={`${styles.progress} ${styles[`progress-${size}`]}`}
      />
    </div>
  );
}
