import authReducer from 'store/auth/reducer';
import { login } from 'store/auth/thunks';

import { AuthState } from 'types';

describe('Auth reducer', () => {
  const initialState: AuthState = {
    isFetching: false,
    credentials: undefined,
    isAuthenticated: false,
    user: undefined
  };

  it('should handle initial state', () => {
    expect(authReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should set isFetching true', () => {
    const action = login.pending('', { email: 'test', password: 'test' });
    expect(authReducer(initialState, action)).toStrictEqual({
      ...initialState,
      isFetching: true
    });
  });
});
