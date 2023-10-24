import React from 'react';

import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';
import Loading from './assets/Loading.svg';

interface ButtonProps {
  type?:
    | 'primary'
    | 'danger'
    | 'loading'
    | 'disabled'
    | 'selected'
    | 'dashed'
    | 'link';
  onClick: (data?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = ({type, onClick}: ButtonProps) => {
  return type === 'link' ? (
    <a className={styles.Link}>{type}</a>
  ) : (
    <button
      type="button"
      disabled={type === 'loading' || type === 'disabled'}
      className={`${styles.button} ${styles[`button-${type}`]}`}
      onClick={onClick}>
      {type === 'loading' && (
        <ReactSVG src={Loading} className={styles['Loading-svg']} />
      )}
      {type || 'Default'}
    </button>
  );
};
