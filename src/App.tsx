import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import './App.css';
import { useAppSelector } from 'app/hooks';
import { selectDarkMode } from 'store/settings/selectors';
import { Login } from './screens/login/Login';

function App() {

  const darkMode = useAppSelector(selectDarkMode);

  return (
    <Router>
      <div className={darkMode ? 'dark': 'light'}>
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
