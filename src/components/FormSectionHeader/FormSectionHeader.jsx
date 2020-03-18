import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const borderColor = '#404040';
const useStyles = makeStyles({
  titleBox: {
    fontFamily: 'Avenir Next',
    backgroundColor: borderColor,
    color: 'white',
    border: `3px solid ${borderColor}`,
    letterSpacing: 1,
    display: 'inline-block'
  },
  line: {
    display: 'inline-block',
    border: `1px solid ${borderColor}`,
    width: '100%'
  }
});

function FormSectionHeader({ title }) {
  const classes = useStyles();

  return (
    <Grid container direction="row">
      <Grid item>
        <div className={classes.titleBox}>{title}</div>
      </Grid>
      <Grid item xs={9}>
        <div className={classes.line}></div>
      </Grid>
    </Grid>
  );
}

export default FormSectionHeader;
