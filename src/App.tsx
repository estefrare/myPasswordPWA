import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import 'App.css';
import { Accounts } from 'screens/accounts/Accounts';
import Firebase from 'helpers/firebase';
import { Login } from 'screens/login/Login';
// eslint-disable-next-line no-unused-vars
import { logout } from 'store/auth/thunks';
// import { selectAuthenticated } from 'store/auth/selectors';
import { selectDarkMode } from 'store/settings/selectors';
import { useAppSelector } from 'app/hooks';

// import { webAuthnSignin, webAuthnSignup } from 'helpers/webauth';

function App () {
  const darkMode = useAppSelector(selectDarkMode);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  // const isAuthenticated = useAppSelector(selectAuthenticated);

  useEffect(() => {
    Firebase.auth();
  }, []);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     const usersString = localStorage.getItem('users');
  //     if (usersString) {
  //       webAuthnSignin()
  //         .then((e: any) => {
  //           // eslint-disable-next-line no-console
  //           console.log(e);
  //         })
  //         .catch((e: any) => {
  //           // eslint-disable-next-line no-console
  //           console.log(`1 ${e.toString()}`);
  //           // dispatch(logout());
  //         });
  //     } else {
  //       webAuthnSignup('randomUser')
  //         .then((e: any) => {
  //           // eslint-disable-next-line no-console
  //           console.log(`2 ${e.toString()}`);
  //         })
  //         .catch((e) => {
  //           alert(e);
  //           // dispatch(logout());
  //         });
  //     }
  //   }
  // }, [isAuthenticated]);

  return (
    <Router>
      <div className={darkMode ? 'dark' : 'light'}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/accounts" component={Accounts} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
