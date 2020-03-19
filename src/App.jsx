import React from 'react';
import { Grid } from '@material-ui/core';
import PageHeader from './components/PageHeader';
import Navigation from './components/Navigation';
import FormContent from './components/FormContent';

function App() {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <PageHeader />
        </Grid>
      </Grid>
      <Grid container direction="row">
        <Grid item xs={3}>
          <Navigation />
        </Grid>
        <Grid item xs={9}>
          <FormContent />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
