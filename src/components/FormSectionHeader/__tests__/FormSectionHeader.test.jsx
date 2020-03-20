import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/theme';
import FormSectionHeader from '../FormSectionHeader';

test('renders form section header with title', () => {
  const mockTitle = 'Example';
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <FormSectionHeader title={mockTitle} />
    </ThemeProvider>
  );

  const titleElement = getByText(mockTitle);
  expect(titleElement).toBeInTheDocument();
});
