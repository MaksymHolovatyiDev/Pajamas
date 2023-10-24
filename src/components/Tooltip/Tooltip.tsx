import React from 'react';

import styles from './styled.module.scss';

interface TooltipProps {
  direction: 'bottom' | 'top' | 'left' | 'right';
  text: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  direction,
  text,
}: TooltipProps) => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>{text}</p>
      <div
        className={`${styles.triangle} ${styles[`triangle-${direction}`]}`}
      />
    </div>
  );
};
