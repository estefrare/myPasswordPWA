import { connect } from 'react-redux';
import { DVPState } from 'redux/modules';
import Component from './auth'

interface StateProps {
  readonly authenticated: DVPState['auth']['authenticated'];
}

const mapStateToProps = (state: DVPState) => ({
  authenticated: state.auth.authenticated,
});

export default connect(mapStateToProps)(Component)
export type ReduxProps = StateProps
