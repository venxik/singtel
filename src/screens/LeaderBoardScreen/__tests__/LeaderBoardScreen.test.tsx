import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../../__mocks__';
import ModalScreen from '../LeaderBoardScreen';

describe('ModalScreen', () => {
  it('match snapshot', async () => {
    renderWithProviders(<ModalScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
