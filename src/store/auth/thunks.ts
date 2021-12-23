import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeLogin } from 'requesters/login';
import { Credentials } from 'types';

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const response = await makeLogin(credentials);
      return response.user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
