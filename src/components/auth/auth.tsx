import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { webAuthnSignin, webAuthnSignup } from 'helpers/webauth'
import { ReduxProps } from './'
import styles from './auth.module.css'


export const Auth = (props: ReduxProps) => { 
  const { authenticated } = props
  const history = useHistory();

  useEffect(() => {
    if(authenticated) {
      const usersString = localStorage.getItem('users');
      if(usersString) {
        webAuthnSignin().then(() => {
          history.replace('/home')
        })
        .catch(() => {
          history.replace('/login')
        })
      } else {
        webAuthnSignup('randomUser').then(() => {
          history.replace('/home')
        })
      }
    }
  }, [authenticated, history])

  return (
    <div className={styles.container}>

    </div>
  )
}

export default Auth