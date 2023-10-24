import React from 'react';

import {ReactSVG} from 'react-svg';

import up from './assets/arrow-up.svg';
import down from './assets/arrow-down.svg';

import styles from './styled.module.scss';
import {useSortBodyData} from './hooks';

const svgMapping = {
  up,
  down,
};

interface TableProps {
  head?: string[];
  body?: string[][];
  zebra?: boolean;
}

export const Table: React.FC<TableProps> = ({
  head,
  body,
  zebra,
}: TableProps) => {
  const {sortArray, sortIndex, onSortClick} = useSortBodyData(body);

  return (
    <table className={styles.table}>
      <thead>
        <tr
          className={`${styles.container} ${styles.head} ${
            zebra && styles['head-zebra']
          }`}>
          {head?.map((el, idx) => (
            <th key={el + idx} onClick={() => onSortClick(idx)}>
              <div className={styles['header-text']}>
                <p>{el}</p>
                {idx === sortIndex[0] && sortIndex[1] && (
                  <ReactSVG src={svgMapping[sortIndex[1]]} />
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={`${styles.body} ${zebra && styles['body-zebra']}`}>
        {sortArray?.map((el, idx) => (
          <tr key={idx} className={styles.container}>
            {el.map((el, idx) => (
              <td key={el + idx}>
                <p>{el}</p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
