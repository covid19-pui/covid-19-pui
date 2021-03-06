import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/theme';
import PageHeader from '../PageHeader';

test('renders page header', () => {
  render(
    <ThemeProvider theme={theme}>
      <PageHeader />
    </ThemeProvider>
  );
});
