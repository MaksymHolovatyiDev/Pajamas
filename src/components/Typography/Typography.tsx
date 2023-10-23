import styles from './styles.module.scss';

interface TypographyProps {
  text?: 'Primary' | 'Secondary' | 'Tertiary';

  scale?: number;

  label?: 'bold' | 'underline' | 'bold-underline';
}

export function Typography({text, scale, label}: TypographyProps) {
  return (
    <p
      className={`${text && styles[text]} ${label && styles[`text-${label}`]}`}
      style={{fontWeight: scale}}>
      Pajamas
    </p>
  );
}
