import { RootState } from 'store/store'

export const selectDarkMode = (state: RootState) => state.settings.darkMode;