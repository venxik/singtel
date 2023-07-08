import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import Button from '../Button';
import { ComicText } from '../../StyledText';
import { fireEvent } from '@testing-library/react-native';

describe('Button', () => {
  it(`match snapshot`, () => {
    const tree = renderWithProviders(
      <Button>
        <ComicText>Test</ComicText>
      </Button>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`can be pressed and functional`, () => {
    let number = 1;
    const { getByTestId } = renderWithProviders(
      <Button testID="button" onPress={() => (number += 1)}>
        <ComicText>Test</ComicText>
      </Button>
    );
    fireEvent.press(getByTestId('button'));
    expect(number).toBe(2);
  });
});
