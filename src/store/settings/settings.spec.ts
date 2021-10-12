import settingsReducer, { setDarkMode } from 'store/settings/reducer';
import { SettingsState } from 'types';

describe('Settings reducer', () => {
  const initialState: SettingsState = {
    darkMode: false,
  };

  it('should handle initial state', () => {
    expect(settingsReducer(undefined, { type: 'unknown' })).toEqual({
      darkMode: false,
    });
  });

  it('should set dark mode true', () => {
    const actual = settingsReducer(initialState, setDarkMode());
    expect(actual.darkMode).toEqual(true);
  });

  it('should set dark mode false', () => {
    const actual = settingsReducer({ darkMode: true }, setDarkMode());
    expect(actual.darkMode).toEqual(false);
  });
});
