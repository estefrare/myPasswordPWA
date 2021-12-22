import { RootState } from 'store/store'

export const selectFetching = (state: RootState) => state.auth.isFetching;
export const selectError = (state: RootState) => state.auth.error;