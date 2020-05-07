import React from 'react';
import styles from './header.module.css'
import Button from 'components/shared/button'
import { ReduxProps } from './'


export const Header = (props: ReduxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.logout}>
        <Button className={styles.logoutButton} onClick={props.logout}>
          Logout
        </Button>
      </div>
    </div>
  )
}

export default Header