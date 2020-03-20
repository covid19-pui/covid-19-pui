import React from 'react';
import { Grid } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';

import useStyles from './styles';
import theme from 'styles/theme';
import PageHeader from 'components/PageHeader';
import Navigation from 'components/Navigation';
import FormContent from 'components/FormContent';
import FormProvider from 'components/FormProvider';

function App() {
  const styles = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <PageHeader />
        </Grid>
      </Grid>

      <Navigation />

      <div className={clsx(styles.content, 'tocSection')}>
        <FormProvider>
          <FormContent />
        </FormProvider>
      </div>
    </>
  );
}

function ThemedApp() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

export default ThemedApp;
