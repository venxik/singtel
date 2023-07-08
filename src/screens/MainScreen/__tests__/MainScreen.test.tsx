import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../../__mocks__';
import MainScreen from '../MainScreen';

describe('MainScreen', () => {
  it('match snapshot', async () => {
    renderWithProviders(<MainScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
