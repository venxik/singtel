import React from 'react';
import { renderWithProviders } from '../../../../__mocks__';
import ComicText from '../StyledText';

describe('StyledText', () => {
  it(`match snapshot`, () => {
    const tree = renderWithProviders(<ComicText>Snapshot test!</ComicText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
