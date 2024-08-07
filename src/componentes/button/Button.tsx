import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type Props = {
  children: ReactNode | ReactNode[];
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <a href="!#" className={`${styles.button} text-preset-2-bold`}>
      {children}
    </a>
  );
};

export default Button;