import { createSlice } from '@reduxjs/toolkit';

import { getAccounts } from 'store/accounts/thunks';
import { logout } from 'store/auth/thunks';

import { AccountsState } from 'types';

const initialState: AccountsState = {
  isFetching: false,
  list: [],
  error: undefined
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    cleanError: (state) => {
      return { ...state, error: undefined };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccounts.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getAccounts.fulfilled, (state, action) => {
        state.isFetching = false;
        state.list = action.payload;
      })
      .addCase(getAccounts.rejected, (state, action) => {
        state.isFetching = false;
      })
      .addCase(logout.fulfilled, (state) => {
        return initialState;
      });
  }
});

export const { cleanError } = accountsSlice.actions;

export default accountsSlice.reducer;
