import { AuthState } from './types';

const InitialState: AuthState = {
  error: undefined,
  isFetching: false,
  authenticated: false,
  user: undefined,
};

export default InitialState;