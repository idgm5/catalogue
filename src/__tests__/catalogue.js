/* eslint-disable */
import '@testing-library/jest-dom';
import React from 'react';
import { render, getByText, screen } from '@testing-library/react';
import Catalogue from '../containers/Catalogue';

test('if Catalogue is rendered after connection', () => {
  render(<Catalogue />);
  expect(screen.getByTestId('catalogue')).toBeInTheDocument();
});
