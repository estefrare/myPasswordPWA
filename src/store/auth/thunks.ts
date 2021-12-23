import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeLogin } from 'requesters/login';

import firebase from 'firebase/compat/app';

import { Credentials } from 'types';

export const login = createAsyncThunk<
firebase.auth.UserCredential['user'],
Credentials,
{
  rejectValue: firebase.FirebaseError
}
>(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await makeLogin(credentials);
      return response.user as firebase.auth.UserCredential['user'];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
