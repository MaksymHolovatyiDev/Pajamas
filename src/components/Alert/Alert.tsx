import {ReactSVG} from 'react-svg';
import Cross from './assets/cross.svg';

import styles from './styles.module.scss';

interface AlertProps {
  type: 'error' | 'warning' | 'success' | 'info' | 'notification';
  title?: string;
  text: string;
  buttons?: [string, string];
  cross?: boolean;
}

export function Alert({type, title, text, buttons, cross}: AlertProps) {
  return (
    <div className={`${styles.root} ${styles[`root-${type}`]}`}>
      <ReactSVG src={`src/components/Alert/assets/${type}.svg`} />

      <div className={styles.container}>
        {title && <p className={styles.title}>{title}</p>}
        <p>{text} </p>
        {buttons && (
          <div className={styles['buttons-container']}>
            <button className={styles['button-action']}>{buttons[0]}</button>
            <button type="button" className={styles['button-alternate']}>
              {buttons[1]}
            </button>
          </div>
        )}
      </div>

      {!cross && <ReactSVG src={Cross} />}
    </div>
  );
}
