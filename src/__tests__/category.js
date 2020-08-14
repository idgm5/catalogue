/* eslint-disable */
import '@testing-library/jest-dom';
import React from 'react';
import { render, getByText, screen } from '@testing-library/react';
import Category from '../containers/Category';

const propData = {
  title: "testing",
  picture: "/logo192.png",
  description: "description test",
}

test('if Category have a description', () => {
  render(<Category description={propData.description} picture={propData.picture} category={propData.category}/>);
  expect(screen.getByText('description test')).toBeInTheDocument();
});

test('if Category have a picture', () => {
  render(<Category picture={propData.picture} category={propData.category} description={propData.description} />);
  expect(screen.getByTestId('image')).toHaveAttribute('src', '/logo192.png')
});

test('if Category have a category', () => {
  render(<Category category={propData.title} picture={propData.picture} description={propData.description}/>);
  expect(screen.getByTestId('testing')).toBeInTheDocument();
});
