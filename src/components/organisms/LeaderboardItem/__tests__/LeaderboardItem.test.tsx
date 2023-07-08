import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import LeaderboardItem from '../LeaderboardItem';
import { screen } from '@testing-library/react-native';

describe('LeaderboardItem', () => {
  it(`match snapshot`, () => {
    renderWithProviders(<LeaderboardItem text="test" score={10} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it(`can have correct text`, () => {
    renderWithProviders(<LeaderboardItem testID="category-item" text="test" score={10} />);
    expect(screen.getByTestId('leaderboard-item-text').props.children).toEqual('test');
  });
});
