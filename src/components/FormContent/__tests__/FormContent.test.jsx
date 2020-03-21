import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from 'styles/theme';
import FormContent from 'components/FormContent';
import FormProvider from 'components/FormProvider';

const MockTOC = () => {
  return <div className="toc"></div>;
};

test('renders form content', () => {
  render(
    <ThemeProvider theme={theme}>
      <MockTOC />

      <div className="tocSection">
        <FormProvider>
          <FormContent />
        </FormProvider>
      </div>
    </ThemeProvider>
  );
});
