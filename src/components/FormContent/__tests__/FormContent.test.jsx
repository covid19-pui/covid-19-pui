import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../../../styles/theme';
import FormContent from '../FormContent';

const MockTOC = () => {
  return <div className="toc"></div>;
};

test('renders form content', () => {
  render(
    <ThemeProvider theme={theme}>
      <MockTOC />
      <div className="tocSection">
        <FormContent />
      </div>
    </ThemeProvider>
  );
});
