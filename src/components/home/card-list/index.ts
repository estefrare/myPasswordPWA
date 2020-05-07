import Component from './card-list'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction, DVPState } from 'redux/modules';
import { getServices } from 'redux/modules/services/thunks'

interface StateProps {
  readonly serviceList: DVPState['services']['list'];
  readonly isFetching: DVPState['services']['isFetching'];
}

const mapStateToProps = (state: DVPState) => ({
  serviceList: state.services.list,
  isFetching: state.services.isFetching,
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