import React, {useState} from 'react';

import styles from './styled.module.scss';

import {ReactSVG} from 'react-svg';
import Chevron from './assets/chevron-down.svg';

interface AccordionProps {
  title: string;
  text: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  text,
}: AccordionProps) => {
  const [hidden, setHidden] = useState(false);

  const onClick = () => {
    setHidden(prevState => !prevState);
  };

  return (
    <div className={styles.root}>
      <button
        type="button"
        onClick={onClick}
        className={`${styles.button} ${hidden && styles['button-svg']}`}>
        <ReactSVG src={Chevron} />
      </button>
      <div className={styles.container}>
        <p onClick={onClick} className={styles.title}>
          {title}
        </p>
        <div className={styles['text-container']}>
          <p className={`${styles.text} ${hidden && styles['text-hidden']}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
