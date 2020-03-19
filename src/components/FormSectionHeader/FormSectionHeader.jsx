import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const borderColor = '#404040';
const useStyles = makeStyles({
  titleBox: {
    fontFamily: 'Avenir Next, Segoe UI, Roboto, Helvetica Neue, sans-serif',
    fontWeight: 500,
    backgroundColor: borderColor,
    color: 'white',
    border: `3px solid ${borderColor}`,
    letterSpacing: 1,
    display: 'inline-block',
    padding: '0 5px'
  },
  line: {
    display: 'inline-block',
    border: `1px solid ${borderColor}`,
    width: '100%'
  }
});

function FormSectionHeader({ title }) {
  const styles = useStyles();

  return (
    <Box display="flex" flexDirection="row">
      <Box className={styles.titleBox}>{title}</Box>
      <Box flexGrow={1}>
        <div className={styles.line}></div>
      </Box>
    </Box>
  );
}

export default FormSectionHeader;
