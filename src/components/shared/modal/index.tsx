import React from 'react'
import Modal from '@material-ui/core/Modal';
import Button from 'components/shared/button'
import styles from './modal.module.css'

interface Props {
  open: boolean;
  title: string;
  detail: string;
  submitting?: boolean;
  close: () => void;
  callback: (params: any) => void;
}

const ModalComponent = (props: Props) => {

  const { 
    open, 
    title, 
    detail,
    close,
    callback,
    submitting
  } = props

  return (
    <Modal
    className={styles.modalContainer}
    open={open}
  >
    <div className={styles.modal}>
      <div className={styles.modalHeader}>
        {title}
      </div>
      <div className={styles.body}>
        <div className={styles.detail}>
          {detail}
        </div>
        <div className={styles.buttons}>
          <Button
            submitting={submitting}
            onClick={callback}
            className={styles.button}
          >
            Yes
          </Button>
          <Button
            disabled={submitting}
            onClick={close} 
            className={`${styles.button} ${styles.cancel}`}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  </Modal>
  )
}

export default ModalComponent