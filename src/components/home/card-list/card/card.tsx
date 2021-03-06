import React, { useState, useCallback } from 'react';
import { Form, Field, FieldRenderProps } from 'react-final-form'
import Button from 'components/shared/button'
import Modal from 'components/shared/modal'
import { generatePassword } from 'helpers/utils'
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
  return (
  <label className={styles.inputLabel}>
    <input
      className={`${styles.input} ${className}`}
      readOnly={readOnly}
      placeholder={placeholder}
      {...input}
    />
  </label>
)}

export const Header = (props: Props) => {

  const [ clipboard, setClipboard ] = useState('')
  const [ isDeletingMode, setDeleteMode ] = useState(false)
  const [ isShowingPassword, setShowPassword ] = useState(false)
  const [ isEditing, setEditMode ] = useState(false)
  const {
    serviceValue,
    isDeleting,
    deleteServices,
    isAdding,
    cancelAdding,
    isAddFetching,
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

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setClipboard(text)
  };

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
        mutators={{
          setValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value);
          },
        }}
        render={({ handleSubmit, form, values, submitting, pristine }) => (
          <>
            <div className={styles.body}>
              <div className={styles.inputContainer}>
                <Field
                  name="name"
                  placeholder="Name"
                  type="text"
                  className={styles.inputHeader}
                  component={Input}
                  readOnly={!isEditing && !isAdding}
                />
                {!isAdding && !isEditing && (
                  <button onClick={() => setDeleteMode(true)} className={styles.trashButton}>
                    <i className="material-icons">delete_outline</i>
                  </button>
                )}
              </div>
              <div className={styles.inputContainer}>
                <Field
                  name="username"
                  placeholder="Username"
                  type="text"
                  component={Input}
                  readOnly={!isEditing && !isAdding}
                />
                { (!isEditing && !isAdding) && (
                  <button
                    onClick={() => copyToClipboard(serviceValue.username)}
                    className={styles.trashButton}
                  >
                    <i className="material-icons">
                      {clipboard === serviceValue.username
                        ? 'check_circle'
                        : 'file_copy'
                      }
                    </i>
                  </button>
                )}
              </div>
              <div className={styles.inputContainer}>
                <Field
                  name="password"
                  placeholder="Password"
                  type={(isShowingPassword || isEditing || isAdding) ? "text" : "password"}
                  component={Input}
                  readOnly={!isEditing && !isAdding}
                />
                { (!isEditing && !isAdding) ? (
                  <>
                    <button
                      onClick={() => setShowPassword(!isShowingPassword)}
                      className={styles.trashButton}
                    >
                      <i className="material-icons">{isShowingPassword ? 'visibility' : 'visibility_off'}</i>
                    </button>
                    <button
                      onClick={() => copyToClipboard(serviceValue.password)}
                      className={styles.trashButton}
                    >
                      <i className="material-icons">
                      {clipboard === serviceValue.password
                        ? 'check_circle'
                        : 'file_copy'
                      }
                    </i>
                    </button>
                  </>
                )
                : (
                  <button
                    onClick={() => {
                      form.mutators.setValue('password', generatePassword());
                    }}
                    className={styles.trashButton}
                  >
                    <i className="material-icons">loop</i>
                  </button>
                )
              }
              </div>
              {((isEditing || isAdding) || serviceValue.link) && (
                <div className={styles.inputContainer}>
                  <Field
                    name="link"
                    placeholder="Link"
                    type={"text"}
                    component={Input}
                    readOnly={!isEditing && !isAdding}
                  />
                </div>
              )}
               {((isEditing || isAdding) || serviceValue.note) && (
                <div className={styles.inputContainer}>
                  <Field
                    name="note"
                    placeholder="Note"
                    type={"text"}
                    component={Input}
                    readOnly={!isEditing && !isAdding}
                  />
                </div>
              )}
              <div className={styles.buttonContainer}>
                {!isEditing && !isAdding
                  ? (
                    <Button
                      className={styles.editButton}
                      onClick={() => setEditMode(true)}
                      >
                      Edit
                    </Button>
                  )
                  : (
                    <>
                    <Button
                      disabled={
                        (isEditing && pristine)
                        || submitting
                        || !values.name
                        || !values.username
                        || !values.password
                      }
                      submitting={submitting && isAddFetching}
                      className={`${styles.editButton} ${styles.saveButton}`}
                      onClick={(isEditing || isAdding)
                        ? handleSubmit
                        : () => setEditMode(true)}
                    >
                      {(isEditing || isAdding) ? 'Save' : 'Edit'}
                    </Button>
                    <Button
                      disabled={submitting}
                      className={styles.editButton}
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                    </>
                  )
                }
              </div>
            </div>
          </>
        )}
      />
    </div>
  )
}

export default Header