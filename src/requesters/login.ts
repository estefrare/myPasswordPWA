import Firebase from 'helpers/firebase';
import firebase from 'firebase/compat/app';

import { Credentials } from 'types';

export function makeLogin (credentials: Credentials): Promise<firebase.auth.UserCredential> {
  return Firebase.auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password);
}
