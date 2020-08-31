import React, { useEffect, Suspense, lazy } from 'react';
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import { connect } from  'react-redux';
import { DVPState } from 'redux/modules';
import PulseLoader from 'react-spinners/PulseLoader'
import Firebase from 'helpers/firebase';
import styles from './app.module.css';

const Login = lazy(() => import('components/login'));
const SignUp = lazy(() => import('components/sign-up'));
const Auth = lazy(() => import('components/auth'));
const Home = lazy(() => import('components/home'));

interface Props {
  readonly user: DVPState['auth']['user'];
  readonly authenticated: DVPState['auth']['authenticated'];
}

export const App = (props: Props) => {
  const { authenticated, user } = props
  const history = useHistory();

  useEffect(() => {
    if(authenticated) {
      if(user) {
        Firebase.app.analytics().setUserId(user.email)
      }
      history.replace('/auth')
    } else {
      history.replace('/login')
    }
  }, [authenticated, history, user])

  return (
    <div className={styles.app}>
      <Switch>
        <Suspense fallback={<PulseLoader size={15} color={'#292724'} loading />}>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/home" component={Home} />
        </Suspense>
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: DVPState) => ({
  user: state.auth.user,
  authenticated: state.auth.authenticated,
})

export default connect(mapStateToProps)(App);
