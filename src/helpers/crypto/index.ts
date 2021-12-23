import CryptoJS from 'crypto-js';
import { store } from 'store/store';

export const decode = (hash: string) => {
  const password = store.getState().auth.password;
  const decryptedBytes = CryptoJS.AES.decrypt(hash, password || '');
  return decryptedBytes.toString(CryptoJS.enc.Utf8);
};
