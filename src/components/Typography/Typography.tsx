import React from 'react';

import styles from './styles.module.scss';

interface TypographyProps {
  variant?: 'primary' | 'secondary' | 'tertiary';

  scale?: number;

  label?: 'bold' | 'underline' | 'bold-underline';

  text: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  scale,
  label,
  text,
}: TypographyProps) => {
  return (
    <p
      className={`${variant && styles[variant]} ${
        label && styles[`text-${label}`]
      }`}
      style={{fontWeight: scale}}>
      {text}
    </p>
  );
};
