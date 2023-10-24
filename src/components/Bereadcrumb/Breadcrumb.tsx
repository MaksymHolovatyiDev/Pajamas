import React from 'react';

import {ReactSVG} from 'react-svg';
import BaseAvatar from './assets/Base Avatar.svg';

import styles from './styles.module.scss';

interface BreadcrumbProps {
  items: {text: string; image: boolean}[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
}: BreadcrumbProps) => {
  return (
    <ul className={styles.root}>
      {items.map((el, idx) => (
        <li key={el.text + idx} className={styles.item}>
          <a className={styles.link}>
            {el.image && <ReactSVG src={BaseAvatar} />}
            <p className={styles.text}>{el.text}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};
