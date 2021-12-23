
import PropagateLoader from 'react-spinners/PropagateLoader';
import React from 'react';
import cx from 'classnames';
import styles from 'ui/button/button.module.css';

interface Props {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactChild,
  isLoading?: boolean,
  styles?: string;
}

const Button = (props: Props) => {
  return (
    <button
      className={cx(styles.button, props.styles)}
      disabled={props.disabled || props.isLoading}
      onClick={props.onClick}
    >
      {props.isLoading
        ? <PropagateLoader color="#FFF" loading size={5} />
        : props.children
      }
    </button>
  );
};

export default Button;
