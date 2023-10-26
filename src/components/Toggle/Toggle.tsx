import React, {useState} from 'react';

import {ReactSVG} from 'react-svg';

import Check from './assets/check.svg';
import Close from './assets/close.svg';

import styles from './styles.module.scss';

interface ToggleProps {
  label: string;
  onClick: (data: boolean) => void;
  help?: string;
  description?: string;
  horizontal?: boolean;
  disabled?: boolean;
  isActive?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  onClick,
  help,
  description,
  horizontal,
  disabled,
  isActive,
}: ToggleProps) => {
  const [active, setActive] = useState(isActive || false);

  const onToggleClick = () => {
    onClick(!active);
    setActive(prevState => !prevState);
  };

  return (
    <div
      className={`${styles.container} ${
        horizontal && styles['container-horizontal']
      } ${disabled && styles['container-disabled']}`}>
      <div className={styles['label-container']}>
        <p className={styles.label}>{label}</p>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <button
        disabled={disabled}
        className={`${styles.button} ${active && styles['button-active']}`}
        onClick={onToggleClick}>
        <div
          className={`${styles.circle} ${active && styles['circle-active']}`}>
          <ReactSVG src={active ? Check : Close} />
        </div>
      </button>
      {help && <p className={styles.help}>{help}</p>}
    </div>
  );
};
