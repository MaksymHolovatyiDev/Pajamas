import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';

interface StatusProps {
  status: 'critical' | 'high' | 'medium' | 'low' | 'info' | 'unknown';
}

export function Status({status}: StatusProps) {
  return (
    <div className={styles.root}>
      <ReactSVG src={`src/components/Status/assets/${status}.svg`} />
      <p>{status}</p>
    </div>
  );
}
