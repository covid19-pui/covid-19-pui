import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Image from './covid.png';

const useStyles = makeStyles(theme => ({
  bg: {
    backgroundImage: `url(${Image})`,
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 300,
    fontSize: 'calc(12px + 0.9vw)',
    padding: 'calc(2px + 1vw) 40px',
    width: '50%',
    minWidth: '500px'
  }
}));

function PageHeader() {
  const styles = useStyles();

  return (
    <div className={styles.bg}>
      <div className={styles.text}>
        Human Infection with 2019 Novel Coronavirus Person Under Investigation (PUI) and Case Report
        Form
      </div>
    </div>
  );
}

export default PageHeader;
