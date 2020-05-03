import { AuthState } from './types';

const InitialState: AuthState = {
  error: undefined,
  isFetching: false,
  token: '',
};

export default InitialState;