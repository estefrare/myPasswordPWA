import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { webAuthnSignin, webAuthnSignup } from 'helpers/webauth'
import { ReduxProps } from './'
import styles from './auth.module.css'


export const Auth = (props: ReduxProps) => { 
  const { authenticated, password, logout } = props
  const history = useHistory();

  useEffect(() => {
    if(authenticated) {
      if(!password) {
        logout()
      } else {
        const usersString = localStorage.getItem('users');
        if(usersString) {
          webAuthnSignin().then(() => {
            history.replace('/home')
          })
          .catch(() => {
            logout()
          })
        } else {
          webAuthnSignup('randomUser').then(() => {
            history.replace('/home')
          })
        }
      }
    }
  }, [authenticated, history, password, logout])

  return (
    <div className={styles.container}>

    </div>
  )
}

export default Auth