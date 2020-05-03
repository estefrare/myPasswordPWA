import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader'
import styles from './button.module.css';

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  submitting?: boolean;
  disabled?: boolean;
}

export const Button = (props: Props) => {

  const { 
    type = 'button',
    children,
    disabled,
    submitting,
  } = props

  return (
    <button 
      type={type}
      disabled={disabled}
      className={styles.button}
    >
      {submitting 
        ? (<PulseLoader
            size={5}
            color={'#292724'}
            loading={true}
          />) 
        : children
      }
    </button>
  );
}

export default Button;
