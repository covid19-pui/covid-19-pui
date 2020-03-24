import React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

export function FormGroup({ children, options, headerText, textRows = 1 }) {
  const styles = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={styles['form-group-header']}>
          <div
            className={clsx(styles['header-text'], headerText && styles[`text-rows-${textRows}`])}
          >
            {headerText}
          </div>

          <div
            className={clsx(
              styles['header-button-options'],
              styles[`options-count-${options.length}`]
            )}
          >
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
