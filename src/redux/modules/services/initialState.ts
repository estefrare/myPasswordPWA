import { ServicesState } from './types';

const InitialState: ServicesState = {
  error: undefined,
  isFetching: false,
  isDeleting: false,
  list: [],
};

export default InitialState;