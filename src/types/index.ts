import firebase from 'firebase/compat/app';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  isFetching: boolean,
  credentials?: Credentials,
  isAuthenticated: boolean,
  user: firebase.UserInfo | null | undefined,
}

export interface SettingsState {
  darkMode: boolean;
}