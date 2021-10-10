
import React from 'react';
import styles from './input.module.css';

interface Props {
  disabled: boolean;
  onChange: (vallue: string) => void;
  value: string;
  placeholder: string;
}

const Input = (props: Props) => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value)
  }

  return (
    <input
      className={styles.input}
      {...props}
      onChange={onChange}
    />
  );
}

export default Input