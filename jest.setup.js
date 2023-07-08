import * as ReactNative from 'react-native';

import '@testing-library/jest-native/extend-expect';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      replace: jest.fn(),
    }),
    useIsFocused: jest.fn(),
  };
});
