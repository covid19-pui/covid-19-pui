import React from 'react';
import { render } from '@testing-library/react';
import FormSectionHeader from '../FormSectionHeader';

test('renders form section header with title', () => {
  const mockTitle = 'Example';
  const { getByText } = render(<FormSectionHeader title={mockTitle} />);

  const titleElement = getByText(mockTitle);
  expect(titleElement).toBeInTheDocument();
});
