import {ReactSVG} from 'react-svg';
import Cross from './assets/cross.svg';
import Error from './assets/error.svg';
import Warning from './assets/warning.svg';
import Success from './assets/success.svg';
import Info from './assets/info.svg';
import Bulb from './assets/bulb.svg';

import styles from './styles.module.scss';

interface AlertProps {
  type: 'error' | 'warning' | 'success' | 'info' | 'notification';
  title?: string;
  buttons?: boolean;
  cross?: boolean;
}

export function Alert({type, title, buttons, cross}: AlertProps) {
  let svg;

  switch (type) {
    case 'error':
      svg = Error;
      break;
    case 'warning':
      svg = Warning;
      break;
    case 'success':
      svg = Success;
      break;
    case 'info':
      svg = Info;
      break;
    case 'notification':
      svg = Bulb;
      break;
  }

  return (
    <div className={`${styles.root} ${styles[`root-${type}`]}`}>
      <ReactSVG src={svg} />

      <div className={styles.container}>
        {title && <p className={styles.title}>{title}</p>}
        <p>
          The body content lets the user know why, and how to remedy or proceed.
        </p>
        {!buttons && (
          <div className={styles['buttons-container']}>
            <button className={styles['button-action']}>Action to take</button>
            <button type="button" className={styles['button-alternate']}>
              Alternate action
            </button>
          </div>
        )}
      </div>

      {!cross && <ReactSVG src={Cross} />}
    </div>
  );
}
