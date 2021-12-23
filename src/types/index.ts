import firebase from 'firebase/compat/app';

export interface Credentials {
  email: string;
  password: string;
}

export interface AuthState {
  isFetching: boolean,
  credentials?: Credentials,
  isAuthenticated: boolean,
  password?: string,
  user: firebase.auth.UserCredential['user'] | null | undefined,
  error?: firebase.FirebaseError
}

export interface SettingsState {
  darkMode: boolean;
}

export interface Account {
  encryptedV2: boolean,
  link: string,
  name: string,
  note: string,
  password: string,
  userId: string,
  username: string,
}

export interface AccountsState {
  isFetching: boolean,
  list: Account[],
  error?: string,
}
