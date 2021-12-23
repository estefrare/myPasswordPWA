import React from 'react';

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import 'App.css';
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
          <Route path="/home">
            <div>Home</div>
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
