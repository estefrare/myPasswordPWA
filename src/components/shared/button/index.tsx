import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader'
import styles from './button.module.css';

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  submitting?: boolean;
  disabled?: boolean;
  onClick?: (params?: any) => void;
  className?: string;
}

export const Button = (props: Props) => {

  const { 
    type = 'button',
    children,
    disabled,
    submitting,
    onClick,
    className
  } = props

  return (
    <button 
      type={type}
      disabled={disabled || submitting}
      className={`${styles.button} ${className}`}
      onClick={onClick}
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
