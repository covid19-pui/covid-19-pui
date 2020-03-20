import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from './covid.png';
const useStyles = makeStyles(theme => ({
  bg: {
    height: '170px',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover'
  },
  text: {
    textAlign: 'left',
    alignItems: 'center',
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    fontSize: '32px',
    padding: '20px 40px'
  }
}));

function PageHeader() {
  const styles = useStyles();
  return (
    <Grid container xs={12} className={styles.bg}>
      <Grid item xs={6} className={styles.text}>
        Human Infection with 2019 Novel Coronavirus Person Under Investigation (PUI) and Case Report
        Form
      </Grid>
    </Grid>
  );
}

export default PageHeader;
