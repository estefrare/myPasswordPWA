import React from 'react'
import { Form, Field } from 'react-final-form'
import TextInput from 'components/shared/text-input'
import Button from 'components/shared/button'
import { FORM_ERROR } from 'final-form';
import { useHistory } from "react-router-dom";
import { ReduxProps } from '.';
import Animation from 'components/shared/animation'
import styles from './login.module.css'

export const Login = (props: ReduxProps) => {
  const { isFetching } = props
  const history = useHistory();

  const onSubmit = async (values: any) => {
    const { password, email } = values;
    let error
    try {
      const response: any = await props.loginWithFirebase({ email, password })
      switch (response.payload.code) {
        case 'auth/user-not-found':
          error = 'Usuario o contraseña incorrecta'
          break
        case 'auth/network-request-failed':
          error = 'Error de conexión'
          break
        case 'auth/wrong-password':
          error = 'Usuario o contraseña incorrecta'
          break
        case 'auth/argument-error':
          error = 'Usuario o contraseña incorrecta'
          break
        case 'auth/too-many-requests':
          error = 'Muchos intentos fallidos. Intente en unos minutos.'
          break
      }
      if(error) {
        return { [FORM_ERROR]: error };
      }
    }
    catch (error) {
      return { [FORM_ERROR]: error };
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <h2 className={styles.logoTitle}>
            MyPassword
          </h2>
          <h6 className={styles.logoSubtitle}>
            Keep all your passwords in one place
          </h6>
        </div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitError, values }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Field
                name="email"
                placeholder="Insert your email"
                type="text"
                label="email"
                component={TextInput}
              />
              <Field
                name="password"
                placeholder="Insert your password"
                type="password"
                label="password"
                component={TextInput}
              />
              <div className={styles.buttons}>
                  <Button
                    type="submit"
                    disabled={isFetching || !values.email || !values.password}
                    submitting={isFetching}
                    >
                    Login
                  </Button>
                  <Button
                    onClick={() => history.push('sign-up')}
                  >
                    Sign Up
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
      <Animation />
    </div>
  )
}

export default Login