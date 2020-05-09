import { ServicesState } from './types';

const InitialState: ServicesState = {
  error: undefined,
  isFetching: false,
  isEditing: false,
  isDeleting: false,
  isAdding: false,
  list: [],
};

export default InitialState;