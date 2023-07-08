import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import { fireEvent, screen } from '@testing-library/react-native';
import QuestionItem from '../QuestionItem';

describe('QuestionItem', () => {
  it(`match snapshot`, () => {
    renderWithProviders(<QuestionItem text="test" isSelected />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it(`can be pressed and functional`, () => {
    let number = 1;
    renderWithProviders(
      <QuestionItem
        testID="question-item"
        text="test"
        onPress={() => (number += 1)}
        isSelected={false}
      />
    );
    fireEvent.press(screen.getByTestId('question-item'));
    expect(number).toBe(2);
  });

  it(`can have display text when isSelected false`, () => {
    renderWithProviders(<QuestionItem text="test" isSelected={false} />);
    expect(screen.getByTestId('question-item-text').props.children).toEqual('test');
  });

  it(`doesn't display text when isSelected true`, () => {
    renderWithProviders(<QuestionItem text="test" isSelected={true} />);
    expect(screen.getByTestId('question-item-text').props.children).toEqual('');
  });
});
