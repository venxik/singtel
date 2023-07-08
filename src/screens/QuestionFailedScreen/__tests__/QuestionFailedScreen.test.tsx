import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../../__mocks__';
import QuestionFailedScreen from '../QuestionFailedScreen';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      replace: mockedNavigate,
    }),
    useRoute: () => ({
      params: {
        points: 10,
      },
    }),
  };
});

describe('QuestionFailedScreen', () => {
  it('match snapshot', async () => {
    renderWithProviders(<QuestionFailedScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('can navigate to question screen when questionTracker below 3', async () => {
    renderWithProviders(<QuestionFailedScreen />);
    fireEvent.press(screen.getByTestId('button-next'));
    expect(mockedNavigate).toHaveBeenCalledWith('QuestionScreen');
  });

  it('can navigate to leaderboard screen when questionTracker is 3 or finished', async () => {
    renderWithProviders(<QuestionFailedScreen />, {
      preloadedState: {
        main: {
          currentScore: 0,
          leaderboards: [],
          questionTracker: 3,
          selectedCategory: '',
        },
      },
    });
    fireEvent.press(screen.getByTestId('button-next'));

    expect(mockedNavigate).toHaveBeenCalledWith('LeaderboardScreen');
  });
});
