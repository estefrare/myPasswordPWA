import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAccounts as getAccountsAPI } from 'requesters/accounts';

export const getAccounts = createAsyncThunk<any, any, any>(
  'accounts/getAccounts',
  async (uid, { rejectWithValue }) => {
    try {
      const response = await getAccountsAPI(uid);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
