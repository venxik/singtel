import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import Button from '../Button';
import { ComicText } from '../../StyledText';
import { fireEvent, screen } from '@testing-library/react-native';

describe('Button', () => {
  it(`match snapshot`, () => {
    renderWithProviders(
      <Button>
        <ComicText>Test</ComicText>
      </Button>
    );
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it(`can be pressed and functional`, () => {
    let number = 1;
    renderWithProviders(
      <Button testID="button" onPress={() => (number += 1)}>
        <ComicText>Test</ComicText>
      </Button>
    );
    fireEvent.press(screen.getByTestId('button'));
    expect(number).toBe(2);
  });
});
