import {ReactSVG} from 'react-svg';

import styles from './styled.module.scss';
import { useSortBodyData } from './hooks';

interface TableProps {
  head?: string[];
  body?: string[][];
  zebra?: boolean;
}

export function Table({ head, body, zebra }: TableProps) {
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
