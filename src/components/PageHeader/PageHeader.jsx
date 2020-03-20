import React from 'react';

import useStyles from './styles';

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
