import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import styles from './text-input.module.css';

interface Props extends FieldRenderProps<string, any> {
  label?: string;
  placeholder?: string;
}

export const TextInput = (props: Props) => {

  const { meta, input, label, placeholder } = props

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label && (
          <span className={styles.labelText}>
            {label}
          </span>
        )}
        <input 
          className={styles.input} 
          type="text"
          placeholder={placeholder}
          {...input} 
        />
      </label>
      <div className={styles.error}>
        {meta.error && meta.touched && (
          <span className={styles.errorText}>
            {meta.error}
          </span>
        )}
      </div>
    </div>
  );
}

export default TextInput;
