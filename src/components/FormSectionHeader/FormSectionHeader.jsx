import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const borderColor = '#404040';

const useStyles = makeStyles(
  {
    titleBox: {
      fontFamily: 'Avenir Next, Segoe UI, Roboto, Helvetica Neue, sans-serif',
      fontWeight: 500,
      backgroundColor: borderColor,
      color: 'white',
      border: `3px solid ${borderColor}`,
      letterSpacing: 1,
      display: 'inline-block',
      padding: '0 5px',
      textTransform: 'uppercase',
      marginBottom: '30em'
    },
    line: {
      display: 'inline-block',
      border: `1px solid ${borderColor}`,
      width: '100%'
    }
  },
  { name: 'FormSectionHeader' }
);

function FormSectionHeader({ title, id }) {
  const styles = useStyles();

  return (
    <Box display="flex" flexDirection="row">
      <Box id={id} className={clsx(styles.titleBox, 'tocHeading')}>
        {title}
      </Box>
      <Box flexGrow={1}>
        <div className={styles.line}></div>
      </Box>
    </Box>
  );
}

export default FormSectionHeader;
