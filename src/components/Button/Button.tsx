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
}

export function Button({type}: ButtonProps) {
  return type === 'link' ? (
    <a className={styles.Link}>{type}</a>
  ) : (
    <button
      type="button"
      disabled={type === 'loading' || type === 'disabled'}
      className={`${styles.button} ${styles[`button-${type}`]}`}>
      {type === 'loading' && (
        <ReactSVG src={Loading} className={styles['Loading-svg']} />
      )}
      {type || 'Default'}
    </button>
  );
}
