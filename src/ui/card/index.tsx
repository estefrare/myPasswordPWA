
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faPen } from '@fortawesome/free-solid-svg-icons';

import cx from 'classnames';
import styles from 'ui/card/card.module.css';

interface Props {
  username: string;
  password: string;
  isLoading?: boolean,
  styles?: string;
  name: string;
}

const Card = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.username}>{props.username}</div>
        <div className={cx(styles.password, { [styles.hide]: !showPassword })}>
          {props.password}
        </div>
      </div>
      <div className={styles.options}>
        <button className={styles.option} onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={faEye} className={styles.icon}/>
        </button>
        <button className={styles.option}>
          <FontAwesomeIcon icon={faPen} className={styles.icon}/>
        </button>
      </div>
    </div>
  );
};

export default Card;
