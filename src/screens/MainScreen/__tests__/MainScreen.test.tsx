import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../../__mocks__';
import MainScreen from '../MainScreen';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('MainScreen', () => {
  it('match snapshot', async () => {
    renderWithProviders(<MainScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('can select category button and background color changed', async () => {
    renderWithProviders(<MainScreen />);
    fireEvent.press(screen.getByTestId('category-animals'));
    expect(screen.getByTestId('category-animals')).toHaveStyle({ backgroundColor: '#686fcc' });
  });

  it('button is disabled when category not selected', async () => {
    renderWithProviders(<MainScreen />);
    expect(screen.getByTestId('button-continue')).toHaveAccessibilityState({ disabled: true });
  });

  it('can press start button and navigate to question screen after select category animals', async () => {
    renderWithProviders(<MainScreen />);
    fireEvent.press(screen.getByTestId('category-animals'));
    fireEvent.press(screen.getByTestId('button-continue'));
    expect(mockedNavigate).toHaveBeenCalledWith('QuestionScreen');
  });

  it('can navigate to leaderboard screen', async () => {
    renderWithProviders(<MainScreen />);
    fireEvent.press(screen.getByTestId('button-leaderboard'));
    expect(mockedNavigate).toHaveBeenCalledWith('LeaderboardScreen');
  });
});
