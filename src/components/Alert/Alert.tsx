import React from 'react';

import {ReactSVG} from 'react-svg';

import error from './assets/error.svg';
import warning from './assets/warning.svg';
import success from './assets/success.svg';
import info from './assets/info.svg';
import notification from './assets/notification.svg';

import Cross from './assets/cross.svg';

import styles from './styles.module.scss';

const svgMapping = {
  error,
  warning,
  success,
  info,
  notification,
};

interface AlertProps {
  type: 'error' | 'warning' | 'success' | 'info' | 'notification';
  title?: string;
  text: string;
  buttons?: [string, string];
  cross?: boolean;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  text,
  buttons,
  cross,
}: AlertProps) => {
  return (
    <div className={`${styles.root} ${styles[`root-${type}`]}`}>
      <ReactSVG src={svgMapping[type]} />

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
};
