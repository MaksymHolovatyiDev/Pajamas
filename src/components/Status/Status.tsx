import React from 'react';

import {ReactSVG} from 'react-svg';

import critical from './assets/critical.svg';
import high from './assets/high.svg';
import medium from './assets/medium.svg';
import low from './assets/low.svg';
import info from './assets/info.svg';
import unknown from './assets/unknown.svg';

import styles from './styled.module.scss';

const svgMapping = {
  critical,
  high,
  medium,
  low,
  info,
  unknown,
};

interface StatusProps {
  status: 'critical' | 'high' | 'medium' | 'low' | 'info' | 'unknown';
}

export const Status: React.FC<StatusProps> = ({status}: StatusProps) => {
  return (
    <div className={styles.root}>
      <ReactSVG src={svgMapping[status]} />
      <p>{status}</p>
    </div>
  );
};
