import { createSlice } from '@reduxjs/toolkit';
import { SettingsState } from 'types'

const initialState: SettingsState = {
  darkMode: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    }
  },
  extraReducers: () => {},
});

export const { setDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;