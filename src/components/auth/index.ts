import { connect } from 'react-redux';
import { DVPState, RootAction } from 'redux/modules';
import { bindActionCreators, Dispatch } from 'redux';
import { logout } from 'redux/modules/auth/thunks'
import Component from './auth'

interface StateProps {
  readonly authenticated: DVPState['auth']['authenticated'];
  readonly useFingerPrint: DVPState['auth']['useFingerPrint'];
  readonly password?: string;
}

const mapStateToProps = (state: DVPState) => ({
  authenticated: state.auth.authenticated,
  password: state.auth.user?.password,
  useFingerPrint: state.auth.useFingerPrint,
})

interface DispatchProps {
  logout: typeof logout
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    logout,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps
