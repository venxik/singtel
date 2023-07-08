import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import { fireEvent } from '@testing-library/react-native';
import QuestionItem from '../QuestionItem';

describe('QuestionItem', () => {
  it(`match snapshot`, () => {
    const tree = renderWithProviders(<QuestionItem text="test" isSelected />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`can be pressed and functional`, () => {
    let number = 1;
    const { getByTestId } = renderWithProviders(
      <QuestionItem
        testID="question-item"
        text="test"
        onPress={() => (number += 1)}
        isSelected={false}
      />
    );
    fireEvent.press(getByTestId('question-item'));
    expect(number).toBe(2);
  });

  it(`can have display text when isSelected false`, () => {
    const { getByTestId } = renderWithProviders(<QuestionItem text="test" isSelected={false} />);
    expect(getByTestId('question-item-text').props.children).toEqual('test');
  });

  it(`doesn't display text when isSelected true`, () => {
    const { getByTestId } = renderWithProviders(<QuestionItem text="test" isSelected={true} />);
    expect(getByTestId('question-item-text').props.children).toEqual('');
  });
});
