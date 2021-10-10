
import React from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from './button.module.css';

interface Props {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactChild,
  isLoading?: boolean,
}

const Button = (props: Props) => {
  return (
    <button
      className={styles.button}
      disabled={props.disabled || props.isLoading}
      onClick={props.onClick}
    >
      {props.isLoading 
        ? <PropagateLoader  color="#FFF" loading size={5} /> 
        : props.children
      }
    </button>
  );
}

export default Button