import React, { useEffect } from 'react';

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
import { selectDarkMode } from 'store/settings/selectors';
import { useAppSelector } from 'app/hooks';

function App () {
  const darkMode = useAppSelector(selectDarkMode);

  useEffect(() => {
    Firebase.auth();
  }, []);

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
