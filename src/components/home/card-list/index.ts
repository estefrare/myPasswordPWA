import Component from './card-list'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction, DVPState } from 'redux/modules';
import { getServices } from 'redux/modules/services/thunks'

interface StateProps {
  readonly serviceList: DVPState['services']['list'];
}

const mapStateToProps = (state: DVPState) => ({
  serviceList: state.services.list,
});

interface DispatchProps {
  getServices: typeof getServices
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    getServices,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps