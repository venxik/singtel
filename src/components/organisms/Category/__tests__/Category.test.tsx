import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import { fireEvent, screen } from '@testing-library/react-native';
import Category from '../Category';

describe('Category', () => {
  it(`match snapshot`, () => {
    renderWithProviders(<Category text="test" isSelected />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it(`can be pressed and functional`, () => {
    let number = 1;
    renderWithProviders(
      <Category testID="category-item" text="test" onPress={() => (number += 1)} isSelected />
    );
    fireEvent.press(screen.getByTestId('category-item'));
    expect(number).toBe(2);
  });

  it(`can have correct text`, () => {
    renderWithProviders(<Category testID="category-item" text="test" isSelected />);
    expect(screen.getByTestId('category-text').props.children).toEqual('test');
  });

  it(`can have correct styling`, () => {
    renderWithProviders(<Category testID="answer-item" text="test" isSelected />);
    expect(screen.getByTestId('category-text').props.children).toEqual('test');
  });
});
