import React, { useState, useCallback } from 'react';
import { Form, Field, FieldRenderProps } from 'react-final-form'
import Button from 'components/shared/button'
import Modal from 'components/shared/modal'
import { ReduxProps } from '.'
import styles from './card.module.css'

interface Props extends ReduxProps {
  isAdding?: boolean;
  cancelAdding?: () => void;
}

interface InputProps extends FieldRenderProps<string, any> {
  placeholder?: string;
  className?: string;
}

const Input = (inputProps: InputProps) => {
  const { input, placeholder, className, readOnly } = inputProps
  return <input
    className={`${styles.input} ${className}`} 
    readOnly={readOnly}
    placeholder={placeholder} 
    {...input}
  />
}

export const Header = (props: Props) => {

  const [ isDeletingMode, setDeleteMode ] = useState(false)
  const [ isEditing, setEditMode ] = useState(false)
  const { 
    serviceValue, 
    isFetching, 
    isDeleting, 
    deleteServices,
    isAdding,
    cancelAdding
  } = props

  const onSubmit = async (values: any) => {
    try {
      if(isAdding) {
        await props.addServices(values)
      } else if (isEditing) {
        await props.editServices(values)
      }
    }
    catch (error) {
      console.log(error)
    }
    finally {
      cancelAdding && cancelAdding()
      setEditMode(false)
    }
  }

  const handleCancel = useCallback(() => {
    if(isEditing) {
      setEditMode(false)
    }
    else if(isAdding) {
      cancelAdding && cancelAdding()
    }
  }, [isEditing, isAdding, cancelAdding, setEditMode])

  return (
    <div className={styles.container}>
      <Modal
        open={isDeletingMode}
        close={() => setDeleteMode(false)}
        callback={() => deleteServices(serviceValue.key)}
        title="Delete"
        detail="Are you sure you want to delete this item?"
        submitting={isDeleting}
      />
      <Form
        initialValues={serviceValue}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitError, values, submitting }) => (
          <>
            <div className={styles.header}>
              <Field 
                name="name"
                placeholder="Name"
                type="text"
                className={styles.inputHeader}
                component={Input}
                readOnly={!isEditing && !isAdding}
              />
              {!isAdding && (
                <button onClick={() => setDeleteMode(true)} className={styles.trashButton}>
                  <i className="material-icons">delete_outline</i>
                </button>
              )}
            </div>
            <div className={styles.body}>
              <div className={styles.inputContainer}>
                <Field 
                  name="username"
                  placeholder="Username"
                  type="text"
                  className={styles.inputHeader}
                  component={Input}
                  readOnly={!isEditing && !isAdding}
                />
              </div>
              <div className={styles.inputContainer}>
                <Field 
                  name="password"
                  placeholder="Password"
                  type="password"
                  className={styles.inputHeader}
                  component={Input}
                  readOnly={!isEditing && !isAdding}
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  disabled={submitting || !values.name || !values.username || !values.password}
                  submitting={submitting && isFetching}
                  className={styles.editButton}
                  onClick={(isEditing || isAdding) 
                    ? handleSubmit
                    : () => setEditMode(true)}
                >
                  {(isEditing || isAdding) ? 'Save' : 'Edit'}
                </Button>
                {(isEditing || isAdding) && (
                  <Button
                    disabled={submitting}
                    className={`${styles.editButton} ${styles.cancelButton}`}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      />
    </div>
  )
}

export default Header