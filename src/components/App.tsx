import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Login from 'components/login';
import Home from 'components/home';
import styles from './app.module.css';

export const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
