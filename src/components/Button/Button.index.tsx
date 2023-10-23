import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';
import Loading from './assets/Loading.svg';

interface ButtonProps {
  type?:
    | 'Primary'
    | 'Danger'
    | 'Loading'
    | 'Disabled'
    | 'Selected'
    | 'Dashed'
    | 'Link';
}

export function Button({type}: ButtonProps) {
  return type === 'Link' ? (
    <a className={styles.Link}>{type}</a>
  ) : (
    <button
      type="button"
      disabled={type === 'Loading' || type === 'Disabled'}
      className={`${styles.button} ${styles[`button-${type}`]}`}>
      {type === 'Loading' && (
        <ReactSVG src={Loading} className={styles['Loading-svg']} />
      )}
      {type || 'Default'}
    </button>
  );
}
