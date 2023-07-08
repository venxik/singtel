import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import { fireEvent, screen } from '@testing-library/react-native';
import AnswerItem from '../AnswerItem';

describe('AnswerItem', () => {
  it(`match snapshot`, () => {
    renderWithProviders(<AnswerItem text="test" />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it(`can be pressed and functional`, () => {
    let number = 1;
    renderWithProviders(
      <AnswerItem testID="answer-item" text="test" onPress={() => (number += 1)} />
    );
    fireEvent.press(screen.getByTestId('answer-item'));
    expect(number).toBe(2);
  });

  it(`can have correct text`, () => {
    renderWithProviders(<AnswerItem testID="answer-item" text="test" />);
    expect(screen.getByTestId('answer-item-text').props.children).toEqual('test');
  });
});
