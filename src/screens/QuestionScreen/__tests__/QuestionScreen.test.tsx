import { fireEvent, screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../../__mocks__';
import QuestionScreen from '../QuestionScreen';

const mockedReplace = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      replace: mockedReplace,
      setOptions: jest.fn(),
    }),
  };
});

afterEach(() => {
  mockedReplace.mockClear();
});

describe('QuestionScreen', () => {
  it('can be definded because we have random values so snapshot will always be different', () => {
    renderWithProviders(<QuestionScreen />);
    expect(screen).toBeDefined();
  });

  it('can show question item button and answer item with correct length', async () => {
    renderWithProviders(<QuestionScreen />, {
      preloadedState: {
        main: { currentScore: 0, leaderboards: [], questionTracker: 0, selectedCategory: 'cities' },
      },
    });
    const questionItems = screen.getAllByTestId('question-item-text');
    const answerItems = screen.getAllByTestId('answer-item-text');
    expect(questionItems.length).toBe(9);
    expect(answerItems.length).toBe(9);
  });

  it('can skip question and navigate to another question screen if user not selecting any from question item', async () => {
    renderWithProviders(<QuestionScreen />, {
      preloadedState: {
        main: { currentScore: 0, leaderboards: [], questionTracker: 0, selectedCategory: 'cities' },
      },
    });
    fireEvent.press(screen.getByTestId('button-next'));
    expect(mockedReplace).toHaveBeenCalledWith('QuestionScreen');
  });

  it('can skip question and navigate to leaderboard screen if user not selecting any from question item and questionTracker is 2', async () => {
    renderWithProviders(<QuestionScreen />, {
      preloadedState: {
        main: { currentScore: 0, leaderboards: [], questionTracker: 2, selectedCategory: 'cities' },
      },
    });
    fireEvent.press(screen.getByTestId('button-next'));
    expect(mockedReplace).toHaveBeenCalledWith('LeaderboardScreen');
  });

  it('can navigate to question success screen if answer is correct', async () => {
    renderWithProviders(<QuestionScreen />, {
      preloadedState: {
        main: { currentScore: 0, leaderboards: [], questionTracker: 0, selectedCategory: 'cities' },
      },
    });
    fireEvent.press(screen.getByTestId('question-item-S'));
    fireEvent.press(screen.getByTestId('question-item-I'));
    fireEvent.press(screen.getByTestId('question-item-N'));
    fireEvent.press(screen.getByTestId('question-item-G'));
    fireEvent.press(screen.getByTestId('question-item-A'));
    fireEvent.press(screen.getByTestId('question-item-P'));
    fireEvent.press(screen.getByTestId('question-item-O'));
    fireEvent.press(screen.getByTestId('question-item-R'));
    fireEvent.press(screen.getByTestId('question-item-E'));
    fireEvent.press(screen.getByTestId('button-next'));
    expect(mockedReplace).toHaveBeenCalledWith('QuestionSuccessScreen', { points: 9 });
  });

  it('can navigate to question failed screen if answer is incorrect', async () => {
    renderWithProviders(<QuestionScreen />, {
      preloadedState: {
        main: { currentScore: 0, leaderboards: [], questionTracker: 0, selectedCategory: 'cities' },
      },
    });
    fireEvent.press(screen.getByTestId('question-item-S'));
    fireEvent.press(screen.getByTestId('question-item-A'));
    fireEvent.press(screen.getByTestId('question-item-I'));
    fireEvent.press(screen.getByTestId('question-item-N'));
    fireEvent.press(screen.getByTestId('question-item-G'));
    fireEvent.press(screen.getByTestId('question-item-R'));
    fireEvent.press(screen.getByTestId('question-item-E'));
    fireEvent.press(screen.getByTestId('question-item-P'));
    fireEvent.press(screen.getByTestId('question-item-O'));
    fireEvent.press(screen.getByTestId('button-next'));
    expect(mockedReplace).toHaveBeenCalledWith('QuestionFailedScreen');
  });

  it('it shows next if user selected any question item', async () => {
    renderWithProviders(<QuestionScreen />, {
      preloadedState: {
        main: { currentScore: 0, leaderboards: [], questionTracker: 0, selectedCategory: 'cities' },
      },
    });
    fireEvent.press(screen.getByTestId('question-item-S'));
    fireEvent.press(screen.getByTestId('question-item-A'));
    fireEvent.press(screen.getByTestId('question-item-I'));
    fireEvent.press(screen.getByTestId('question-item-O'));
    expect(screen.getByTestId('button-next')).toHaveTextContent('Next');
  });

  it("it shows skip if user haven't selected any question item", async () => {
    renderWithProviders(<QuestionScreen />, {
      preloadedState: {
        main: { currentScore: 0, leaderboards: [], questionTracker: 0, selectedCategory: 'cities' },
      },
    });
    expect(screen.getByTestId('button-next')).toHaveTextContent('Skip');
  });
});
