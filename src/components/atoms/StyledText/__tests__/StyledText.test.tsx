import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import ComicText from '../StyledText';
import { screen } from '@testing-library/react-native';

describe('StyledText', () => {
  it(`match snapshot`, () => {
    renderWithProviders(<ComicText>Snapshot test!</ComicText>);
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
