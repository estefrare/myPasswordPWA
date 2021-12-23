import { RootState } from 'store/store';
import { decode } from 'helpers/crypto';

export const selectFetching = (state: RootState) => state.accounts.isFetching;
export const selectError = (state: RootState) => state.accounts.error;
export const selectAccounts = (state: RootState) => {
  return state.accounts.list.map((account) => ({
    ...account,
    password: decode(account.password)
  }));
};
