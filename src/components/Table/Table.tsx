import styles from './styled.module.scss';

interface TableProps {
  head?: string[];
  body?: string[][];
  zebra?: boolean;
}

export function Table({head, body, zebra}: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr
          className={`${styles.container} ${styles.head} ${
            zebra && styles['head-zebra']
          }`}>
          {head?.map((el, idx) => (
            <th key={el + idx}>{el}</th>
          ))}
        </tr>
      </thead>
      <tbody className={`${styles.body} ${zebra && styles['body-zebra']}`}>
        {body?.map((el, idx) => (
          <tr key={idx} className={styles.container}>
            {el.map((el, idx) => (
              <td key={el + idx}>{el}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
