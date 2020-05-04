import React, { useState } from 'react';
import { Form, Field, FieldRenderProps } from 'react-final-form'
import { Service } from 'redux/modules/services/types'
import Button from 'components/shared/button'
import Modal from 'components/shared/modal'
import { ReduxProps } from '.'
import styles from './card.module.css'

interface Props extends ReduxProps {
  service: Service;
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
  const { service, isFetching, isDeleting, deleteServices } = props

  const onSubmit = async (values: any) => {
    try {
      await props.editServices(values)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setEditMode(false)
    }
  }

  return (
    <div className={styles.container}>
      <Modal
        open={isDeletingMode}
        close={() => setDeleteMode(false)}
        callback={() => deleteServices(service.key)}
        title="Delete"
        detail="Are you sure you want to delete this item?"
        submitting={isDeleting}
      />
      <Form
        initialValues={service}
        onSubmit={onSubmit}
        render={({ handleSubmit, submitError, values }) => (
          <>
            <div className={styles.header}>
              <Field 
                name="name"
                placeholder="Name"
                type="text"
                className={styles.inputHeader}
                component={Input}
                readOnly={!isEditing}
              />
              <button onClick={() => setDeleteMode(true)} className={styles.trashButton}>
                <i className="material-icons">delete_outline</i>
              </button>
            </div>
            <div className={styles.body}>
              <div className={styles.inputContainer}>
                <Field 
                  name="username"
                  placeholder="Username"
                  type="text"
                  className={styles.inputHeader}
                  component={Input}
                  readOnly={!isEditing}
                />
              </div>
              <div className={styles.inputContainer}>
                <Field 
                  name="password"
                  placeholder="Password"
                  type="password"
                  className={styles.inputHeader}
                  component={Input}
                  readOnly={!isEditing}
                />
              </div>
              <div className={styles.buttonContainer}>
                <Button
                  submitting={isEditing && isFetching}
                  className={styles.editButton}
                  onClick={isEditing 
                    ? handleSubmit
                    : () => setEditMode(true)}
                >
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
                {isEditing && (
                  <Button
                    className={`${styles.editButton} ${styles.cancelButton}`}
                    onClick={() => setEditMode(!isEditing)}
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