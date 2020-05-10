import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'
import TextInput from 'components/shared/text-input'
import Button from 'components/shared/button'
import { FORM_ERROR } from 'final-form';
import { useHistory } from "react-router-dom";
import Modal from 'components/shared/modal'
import { ReduxProps } from '.';
import styles from './sign-up.module.css'

export const Login = (props: ReduxProps) => { 
  const { isFetching } = props
  const [ created, setCreated ] = useState(false)
  const history = useHistory();

  const onSubmit = async (values: any) => {
    const { password, email } = values;
    let error
    try {
      const response: any = await props.signUpWithFirebase({ email, password })
      switch (response.payload.code) {
        case 'auth/email-already-in-use':
          error = 'Email already in use'
          break
        case 'auth/invalid-email':
          error = 'Email not valid'
          break
        case 'auth/network-request-failed':
          error = 'Error de conexión'
          break
        case 'auth/too-many-requests':
          error = 'Muchos intentos fallidos. Intente en unos minutos.'
          break
      }
      if(error) {
        return { [FORM_ERROR]: error };
      }
      setCreated(true)
    }
    catch (error) {
      return { [FORM_ERROR]: error };
    }
  }

  return (
    <div className={styles.container}>
      <Modal
        open={created}
        close={() => console.log('a')}
        callback={() => history.replace('/login')}
        title="Created"
        detail="Your account was created successfully"
        okButton={{
          title: 'Go to Login',
          onClick: () => history.replace('/login'),
          onlyButton: true
        }}
      />
      <div className={styles.logoContainer}>
        <div className={styles.logoTitle}>
          MyPassword
        </div>
        <div className={styles.logoSubtitle}>
         Sign Up
        </div>
      </div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitError, values }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            {console.log(submitError)}
            <Field 
              name="email"
              placeholder="Email"
              type="text"
              component={TextInput}
            />
            <Field 
              name="password"
              placeholder="Password"
              type="password"
              component={TextInput} 
            />
            <div className={styles.loginButton}>
              <Button 
                type="submit"
                disabled={isFetching || !values.email || !values.password}
                submitting={isFetching}
                >
                Create Account
              </Button>
            </div>
            <div className={styles.error}>
              {submitError}
            </div>
          </form>
        )}
      />
      <div className={styles.message}>
        Your password is used to encrypt the other passwords stored in the database.
        <br/>
        If you forget this password, you will not be able to recover the other passwords.
      </div>
    </div>
  )
}

export default Login