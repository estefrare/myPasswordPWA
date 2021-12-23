import React from 'react';

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import 'App.css';
import { Dashboard } from 'screens/dashboard/Dashboard';
import { Login } from 'screens/login/Login';
import { selectDarkMode } from 'store/settings/selectors';
import { useAppSelector } from 'app/hooks';

function App () {
  const darkMode = useAppSelector(selectDarkMode);

  return (
    <Router>
      <div className={darkMode ? 'dark' : 'light'}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
