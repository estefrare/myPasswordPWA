import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeLogin } from 'requesters/login';
import { Credentials } from 'types'

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials) => {
    try {
      const response = await makeLogin(credentials);
      return response.user;
    }
    catch(error) {
      console.log(error)
    }
  }
);