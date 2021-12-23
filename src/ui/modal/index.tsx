
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'ui/button';
import { ReactComponent as CloseIcon } from 'assets/images/close.svg';
import styles from 'ui/modal/modal.module.css';

interface Props {
  show: boolean;
  title: string;
  close?: {
    callback: () => void;
    label?: string;
  }
}

const Modal = (props: Props) => {
  const { t } = useTranslation();
  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.title}>{props.title}</div>
        <CloseIcon className={styles.closeIcon} />
        {props.close && (
          <Button
            styles={styles.button}
            onClick={props.close.callback}
          >
            <span>
              {props.close.label || t('close')}
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Modal;
