import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { DVPState, RootAction } from 'redux/modules';
import { loginWithFirebase } from 'redux/modules/auth/thunks';
import Component from './login'

interface StateProps {
  readonly isFetching: DVPState['auth']['isFetching'];
}

const mapStateToProps = (state: DVPState) => ({
  isFetching: state.auth.isFetching,
});

interface DispatchProps {
  handleSubmit: () => void;
  loginWithFirebase: typeof loginWithFirebase;
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    loginWithFirebase,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps
