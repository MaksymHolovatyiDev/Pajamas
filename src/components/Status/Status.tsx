import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';

import Critical from './assets/critical.svg';
import High from './assets/high.svg';
import Medium from './assets/medium.svg';
import Low from './assets/low.svg';
import Info from './assets/info.svg';
import Unknown from './assets/unknown.svg';

interface StatusProps {
  status: 'Critical' | 'High' | 'Medium' | 'Low' | 'Info' | 'Unknown';
}

export function Status({status}: StatusProps) {
  let svg;

  switch (status) {
    case 'Critical':
      svg = Critical;
      break;
    case 'High':
      svg = High;
      break;
    case 'Medium':
      svg = Medium;
      break;
    case 'Low':
      svg = Low;
      break;
    case 'Info':
      svg = Info;
      break;
    case 'Unknown':
      svg = Unknown;
      break;
  }

  return (
    <div className={styles.root}>
      <ReactSVG src={svg} />
      <p>{status}</p>
    </div>
  );
}
