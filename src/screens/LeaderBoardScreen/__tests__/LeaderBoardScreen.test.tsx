import { screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../../__mocks__';
import LeaderboardScreen from '../LeaderboardScreen';

describe('LeaderboardScreen', () => {
  it('match snapshot', async () => {
    renderWithProviders(<LeaderboardScreen />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('has correct item length', async () => {
    renderWithProviders(<LeaderboardScreen />, {
      preloadedState: {
        main: { leaderboards: [10], currentScore: 0, questionTracker: 0, selectedCategory: '' },
      },
    });
    const items = await screen.findAllByTestId('leaderboard-item');
    expect(items.length).toBe(1);
  });

  it('shows empty text', () => {
    renderWithProviders(<LeaderboardScreen />);
    expect(screen.getByTestId('text-empty')).toBeDefined();
  });
});
