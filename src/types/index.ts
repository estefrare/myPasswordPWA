import firebase from 'firebase/compat/app';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  isFetching: boolean,
  credentials?: Credentials,
  isAuthenticated: boolean,
  user: firebase.User | null | undefined,
  error: string,
}

export interface SettingsState {
  darkMode: boolean;
}