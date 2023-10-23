import {useState} from 'react';
import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';

interface TableProps {
  head?: string[];
  body?: string[][];
  zebra?: boolean;
}

export function Table({head, body, zebra}: TableProps) {
  const [sortIndex, setSortIndex] = useState<
    [null | number, null | 'up' | 'down']
  >([null, null]);
  const [sortArray, setSortArray] = useState(body ? [...body] : body);

  const onSortClick = (idx: number) => {
    if (sortIndex[0] !== idx) {
      setSortIndex([idx, 'up']);

      const array = sortArray?.sort((a, b) => a[idx].localeCompare(b[idx]));
      setSortArray(array);
    } else if (sortIndex[1] === 'up') {
      setSortIndex([idx, 'down']);

      const array = sortArray?.sort((a, b) => b[idx].localeCompare(a[idx]));
      setSortArray(array);
    } else {
      setSortIndex([null, null]);
      setSortArray(body);
    }
  };

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
                {idx === sortIndex[0] && (
                  <ReactSVG
                    src={`src/components/Table/assets/arrow-${sortIndex[1]}.svg`}
                  />
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
}
