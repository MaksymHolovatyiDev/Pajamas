import styles from './styled.module.scss';

interface TooltipProps {
  direction: 'bottom' | 'top' | 'left' | 'right';
  text: string;
}

export function Tooltip({direction, text}: TooltipProps) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>{text}</p>
      <div
        className={`${styles.triangle} ${styles[`triangle-${direction}`]}`}
      />
    </div>
  );
}
