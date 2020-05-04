import Component from './card'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction, DVPState } from 'redux/modules';
import { editServices, deleteServices } from 'redux/modules/services/thunks'

interface StateProps {
  readonly isFetching: DVPState['services']['isFetching'];
  readonly isDeleting: DVPState['services']['isDeleting'];
}

const mapStateToProps = (state: DVPState) => ({
  isFetching: state.services.isFetching,
  isDeleting: state.services.isDeleting,
});

interface DispatchProps {
  editServices: typeof editServices;
  deleteServices: typeof deleteServices;
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    editServices,
    deleteServices,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps