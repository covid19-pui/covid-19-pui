import React from 'react';
import { Box } from '@material-ui/core';
import clsx from 'clsx';

import useStyles from './styles';

function FormSectionHeader({ title, id }) {
  const styles = useStyles();

  return (
    <Box display="flex" flexDirection="row" className={styles.root}>
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
