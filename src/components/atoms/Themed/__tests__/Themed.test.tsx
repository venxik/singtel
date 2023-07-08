import React from 'react';
import { Text, View } from '../Themed';
import { renderWithProviders } from '../../../../__mocks__';
import { screen } from '@testing-library/react-native';

describe(`Themed`, () => {
  describe('Text', () => {
    it(`match snapshot`, () => {
      renderWithProviders(<Text>Snapshot test!</Text>);
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });

  describe('View', () => {
    it(`match snapshot`, () => {
      renderWithProviders(<View>Snapshot test!</View>);
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });
});
