import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

export function FormGroup({ children, options, headerText }) {
  const styles = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={styles['form-group-header']}>
          <div className={clsx(styles['header-text'], headerText && styles['has-text'])}>
            {headerText}
          </div>

          <div className={styles['header-button-options']}>
            {options.map(option => (
              <div key={option.value} className={styles['header-button-option']}>
                {option.label}
              </div>
            ))}
          </div>
        </div>
      </Grid>

      {children}
    </Grid>
  );
}

export function FormGroupDivider() {
  const styles = useStyles();

  return (
    <Grid item xs={12}>
      <div className={styles.divider}></div>
    </Grid>
  );
}
