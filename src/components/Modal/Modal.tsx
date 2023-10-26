import React from 'react';

import styles from './styles.module.scss';

import {ReactSVG} from 'react-svg';
import Cross from './assets/cross.svg';

interface ModalProps {
  title: string;
  onClose: () => void;
  size?: 'medium' | 'large';
  mainContent: any;
  buttons?: any;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  size,
  onClose,
  buttons,
  mainContent,
}: ModalProps) => {
  return (
    <div className={styles.backdrop}>
      <div className={`${styles.modal} ${styles[`modal-${size}`]}`}>
        <div className={styles['title-container']}>
          <p className={styles.title}>{title}</p>
          <button
            type="button"
            onClick={onClose}
            className={styles['title-button']}>
            <ReactSVG src={Cross} />
          </button>
        </div>
        <div>{mainContent}</div>
        <div className={styles['buttons-container']}>{buttons}</div>
      </div>
    </div>
  );
};
