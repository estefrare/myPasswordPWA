import Component from './header'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction } from 'redux/modules';
import { logout } from 'redux/modules/auth/thunks'

interface DispatchProps {
  logout: typeof logout
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    logout,
  }, dispatch);

export default connect(null, mapDispatchToProps)(Component)
export type ReduxProps = DispatchProps