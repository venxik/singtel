import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../../__mocks__';
import QuestionSuccessScreen from '../QuestionSuccessScreen';

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

describe('QuestionSuccessScreen', () => {
  it('match snapshot', async () => {
    renderWithProviders(<QuestionSuccessScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('have correct point values', async () => {
    renderWithProviders(<QuestionSuccessScreen />);
    expect(screen.getByTestId('title-text')).toHaveTextContent(
      'Correct! Congratulations You Earn 10 Points'
    );
  });

  it('can navigate to question screen when questionTracker below 3', async () => {
    renderWithProviders(<QuestionSuccessScreen />);
    fireEvent.press(screen.getByTestId('button-next'));

    expect(mockedNavigate).toHaveBeenCalledWith('QuestionScreen');
  });

  it('can navigate to leaderboard screen when questionTracker is 3 or finished', async () => {
    renderWithProviders(<QuestionSuccessScreen />, {
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
