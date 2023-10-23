import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';
import QuestionMark from './assets/question-mark.svg';

interface ProgressBarProps {
  color?: 'white' | 'black' | 'blue';
  percentage: number;
  size?: 'small' | 'medium' | 'large';
}

export function ProgressBar({color, percentage, size}: ProgressBarProps) {
  return color ? (
    <div className={`${styles.container} ${styles[`container-${color}`]}`}>
      <div className={styles['container-base']}>
        <p className={`${styles.title} ${styles[`title-${color}`]}`}>
          Time tracking
        </p>
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
          Spent <span className={styles[`value-${color}`]}>1d</span>
        </p>
        <p className={`${styles['time-text']} ${styles[`time-text-${color}`]}`}>
          Est <span className={styles[`value-${color}`]}>1w</span>
        </p>
      </div>
    </div>
  ) : (
    <div className={`${styles.thumb} ${styles[`thumb-${size}`]}`}>
      <div
        style={{width: percentage + '%'}}
        className={`${styles.progress} ${styles[`progress-${size}`]}`}
      />
    </div>
  );
}
