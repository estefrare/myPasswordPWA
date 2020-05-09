import Component from './header'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction, DVPState } from 'redux/modules';
import { logout } from 'redux/modules/auth/thunks'
import { setFingerPrint } from 'redux/modules/auth/actions'

interface StateProps {
  readonly useFingerPrint: DVPState['auth']['useFingerPrint'];
  readonly email?: string;
}

const mapStateToProps = (state: DVPState) => ({
  useFingerPrint: state.auth.useFingerPrint,
  email: state.auth.user?.email,
});

interface DispatchProps {
  logout: typeof logout;
  setFingerPrint: typeof setFingerPrint;
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    logout,
    setFingerPrint,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps