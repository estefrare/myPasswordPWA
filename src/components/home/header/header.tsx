import React, { useEffect } from 'react';
import styles from './header.module.css'
import Button from 'components/shared/button'
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { webAuthnSignup } from 'helpers/webauth'
import { ReduxProps } from './'

const PurpleSwitch = withStyles({
  switchBase: {
    color: '#F5F5F5',
    '&$checked': {
      color: '#292724',
    },
    '&$checked + $track': {
      backgroundColor: '#292724',
    },
  },
  checked: {},
  track: {},
})(Switch);

export const Header = (props: ReduxProps) => {
  const { setFingerPrint, useFingerPrint, email } = props

  useEffect(() => {
    const usersString  = localStorage.getItem('users');
    if(useFingerPrint && email && !usersString) {
      webAuthnSignup(email)
    }
  }, [useFingerPrint, email])
  
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.optionText}>FingerPrint</span>
        <PurpleSwitch
          checked={useFingerPrint}
          onChange={() => setFingerPrint(!useFingerPrint)}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      </div>
      <div className={styles.logout}>
        <Button className={styles.logoutButton} onClick={props.logout}>
          Logout
        </Button>
      </div>
      <div className={styles.version}>v1.0.0</div>
    </div>
  )
}

export default Header