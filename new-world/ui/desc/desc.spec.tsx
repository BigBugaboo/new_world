import React from 'react';
import { render } from '@testing-library/react';
import { BasicDesc } from './desc.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicDesc />);
  const rendered = getByText('hello from Desc');
  expect(rendered).toBeTruthy();
});
