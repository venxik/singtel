import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import { fireEvent } from '@testing-library/react-native';
import AnswerItem from '../AnswerItem';

describe('AnswerItem', () => {
  it(`match snapshot`, () => {
    const tree = renderWithProviders(<AnswerItem text="test" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`can be pressed and functional`, () => {
    let number = 1;
    const { getByTestId } = renderWithProviders(
      <AnswerItem testID="answer-item" text="test" onPress={() => (number += 1)} />
    );
    fireEvent.press(getByTestId('answer-item'));
    expect(number).toBe(2);
  });

  it(`can have correct text`, () => {
    const { getByTestId } = renderWithProviders(<AnswerItem testID="answer-item" text="test" />);
    expect(getByTestId('answer-item-text').props.children).toEqual('test');
  });
});
