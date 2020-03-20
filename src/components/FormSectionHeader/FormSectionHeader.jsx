import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(
  theme => ({
    titleBox: {
      fontFamily: theme.typography.fontFamily,
      fontWeight: 500,
      backgroundColor: theme.palette.common.black,
      color: theme.palette.text.secondary,
      border: `3px solid ${theme.palette.common.black}`,
      letterSpacing: 1,
      display: 'inline-block',
      padding: '0 5px',
      textTransform: 'uppercase',
      marginBottom: '30em'
    },
    line: {
      display: 'inline-block',
      border: `1px solid ${theme.palette.common.black}`,
      width: '100%'
    }
  }),
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
        <div className={styles.line} />
      </Box>
    </Box>
  );
}

export default FormSectionHeader;
