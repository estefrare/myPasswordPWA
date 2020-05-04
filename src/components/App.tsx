import React, { useEffect, Suspense, lazy } from 'react';
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { connect } from  'react-redux';
import { DVPState } from 'redux/modules';
import PulseLoader from 'react-spinners/PulseLoader'
import styles from './app.module.css';

const Login = lazy(() => import('components/login'));
const Home = lazy(() => import('components/home'));

interface Props {
  readonly authenticated: DVPState['auth']['authenticated'];
}

export const App = (props: Props) => {
  const { authenticated } = props
  const history = useHistory();

  useEffect(() => {
    if(authenticated) {
      history.push('/')
    } else {
      history.push('/login')
    }
  }, [authenticated, history])

  return (
    <div className={styles.app}>
      <Switch>
        <Suspense fallback={<PulseLoader size={15} color={'#292724'} loading />}>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Suspense>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: DVPState) => ({ authenticated: state.auth.authenticated })

export default connect(mapStateToProps)(App);
