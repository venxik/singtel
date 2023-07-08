import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import { fireEvent } from '@testing-library/react-native';
import Category from '../Category';

describe('Category', () => {
  it(`match snapshot`, () => {
    const tree = renderWithProviders(<Category text="test" isSelected />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`can be pressed and functional`, () => {
    let number = 1;
    const { getByTestId } = renderWithProviders(
      <Category testID="category-item" text="test" onPress={() => (number += 1)} isSelected />
    );
    fireEvent.press(getByTestId('category-item'));
    expect(number).toBe(2);
  });

  it(`can have correct text`, () => {
    const { getByTestId } = renderWithProviders(
      <Category testID="category-item" text="test" isSelected />
    );
    expect(getByTestId('category-text').props.children).toEqual('test');
  });

  it(`can have correct styling`, () => {
    const { getByTestId } = renderWithProviders(
      <Category testID="answer-item" text="test" isSelected />
    );
    expect(getByTestId('category-text').props.children).toEqual('test');
  });
});
