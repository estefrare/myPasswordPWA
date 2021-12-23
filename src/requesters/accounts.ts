import Firebase from 'helpers/firebase';

export function getAccounts (uid: string) {
  const db = Firebase.firestore();
  return db.collection('services').get()
    .then(querySnapshot => {
      return querySnapshot.docs
        .map(doc => doc.data())
        .filter((doc) => doc.userId === uid);
    });
}
