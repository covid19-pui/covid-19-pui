import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import PageHeader from './components/PageHeader';
import Navigation from './components/Navigation';
import FormContent from './components/FormContent';

const useStyles = makeStyles({
  content: {
    marginLeft: '265px' // TODO: move to theme
  }
});

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
        <FormContent />
      </div>
    </>
  );
}

export default App;
