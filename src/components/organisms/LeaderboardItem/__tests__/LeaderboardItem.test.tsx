import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import LeaderboardItem from '../LeaderboardItem';

describe('LeaderboardItem', () => {
  it(`match snapshot`, () => {
    const tree = renderWithProviders(<LeaderboardItem text="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`can have correct text`, () => {
    const { getByTestId } = renderWithProviders(
      <LeaderboardItem testID="category-item" text="test" />
    );
    expect(getByTestId('leaderboard-item-text').props.children).toEqual('test');
  });
});
