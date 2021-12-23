import firebase from 'firebase/compat/app';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  isFetching: boolean,
  credentials?: Credentials,
  isAuthenticated: boolean,
  user: firebase.auth.UserCredential['user'] | null | undefined,
  error?: firebase.FirebaseError
}

export interface SettingsState {
  darkMode: boolean;
}
