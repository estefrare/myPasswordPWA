import React from 'react'
import { Form, Field } from 'react-final-form'
import TextInput from 'components/shared/text-input'
import Button from 'components/shared/button'
import { FORM_ERROR } from 'final-form';
import { ReduxProps } from '.';
import styles from './login.module.css'

export const Login = (props: ReduxProps) => { 
  const { isFetching } = props

  const onSubmit = async (values: any) => {
    const { password, email } = values;
    let error
    try {
      const response: any = await props.loginWithFirebase({ email, password });
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
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.logoTitle}>
          MyPassword
        </div>
        <div className={styles.logoSubtitle}>
          Keep all your passwords in one place
        </div>
      </div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitError, values }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
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
            <Button 
              type="submit"
              disabled={isFetching || !values.email || !values.password}
              submitting={isFetching}
            >
              Login
            </Button>
            <div className={styles.error}>
              {submitError}
            </div>
          </form>
        )}
      />
    </div>
  )
}

export default Login