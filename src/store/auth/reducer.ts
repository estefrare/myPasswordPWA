import { createSlice } from '@reduxjs/toolkit';

import { login, logout } from 'store/auth/thunks';

import { AuthState } from 'types';

const initialState: AuthState = {
  isFetching: false,
  credentials: undefined,
  isAuthenticated: false,
  user: null,
  error: undefined
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    cleanError: (state) => {
      return { ...state, error: undefined };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isAuthenticated = true;
        state.credentials = action.meta.arg;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isFetching = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        return initialState;
      })
      .addCase(logout.rejected, (state, action) => {
        return initialState;
      });
  }
});

export const { cleanError } = authSlice.actions;

export default authSlice.reducer;
