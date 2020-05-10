import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { DVPState, RootAction } from 'redux/modules';
import { signUpWithFirebase } from 'redux/modules/auth/thunks';
import Component from './sign-up'

interface StateProps {
  readonly isFetching: DVPState['auth']['isFetching'];
}

const mapStateToProps = (state: DVPState) => ({
  isFetching: state.auth.isFetching,
});

interface DispatchProps {
  handleSubmit: () => void;
  signUpWithFirebase: typeof signUpWithFirebase;
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    signUpWithFirebase,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps
