import Component from './card'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux';
import { RootAction, DVPState } from 'redux/modules';
import { editServices, deleteServices, addServices } from 'redux/modules/services/thunks'
import { Service } from 'redux/modules/services/types'

interface StateProps {
  readonly isDeleting: DVPState['services']['isDeleting'];
  readonly isAddFetching: DVPState['services']['isAdding'];

  serviceValue: Service;
}

interface OwnProps {
  service?: Service;
}

const emptyService = { name: '', username: '', password: '', link: '', note: '' }

const mapStateToProps = (state: DVPState, ownProps: OwnProps) => ({
  serviceValue: ownProps.service || emptyService,
  isDeleting: state.services.isDeleting,
  isAddFetching: state.services.isAdding,

});

interface DispatchProps {
  editServices: typeof editServices;
  deleteServices: typeof deleteServices;
  addServices: typeof addServices;
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) =>
  bindActionCreators({
    editServices,
    deleteServices,
    addServices,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Component)
export type ReduxProps = StateProps & DispatchProps