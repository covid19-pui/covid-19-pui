import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/theme';
import App from '../App';

test('renders app', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
});
