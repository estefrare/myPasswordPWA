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
  children?: React.ReactElement;
  okButton?: {
    title: string;
    onClick: () => void;
    onlyButton?: boolean
  }
}

const ModalComponent = (props: Props) => {

  const {
    open,
    title,
    detail,
    close,
    callback,
    submitting,
    children,
    okButton,
  } = props

  return (
    <Modal
    className={styles.modalContainer}
    open={open}
  >
    {children || (
        <div className={styles.modal}>
          <div className={styles.body}>
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.line} />
            <div className={styles.detail}>
              {detail}
            </div>
            <div className={styles.buttons}>
              <Button
                submitting={submitting}
                onClick={callback}
                className={styles.button}
              >
                {okButton ? okButton.title : 'Yes'}
              </Button>
              {okButton?.onlyButton ? null : (
                <Button
                  disabled={submitting}
                  onClick={close}
                  className={styles.button}
                  >
                  Cancel
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
  </Modal>
  )
}

export default ModalComponent