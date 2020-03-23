import React, { memo } from 'react';
import { Grid } from '@material-ui/core';

import { SelectBox, DateField, TextField } from 'components/forms';
import useStyles from './styles';

const typeOptions = [
  { value: 'npSwab', label: 'NP Swab' },
  { value: 'opSwab', label: 'OP Swab' },
  { value: 'sputnum', label: 'Sputnum' },
  { value: 'other', label: 'Other' }
];

export function Specimen({ name }) {
  const styles = useStyles();

  return (
    <Grid container spacing={2} alignItems="center" className={styles['margin-bottom']}>
      <Grid item xs={4}>
        <SelectBox name={`${name}.specimenType`} label="Type" options={typeOptions} />
      </Grid>

      <Grid item xs={4}>
        <DateField name={`${name}.specimenDateCollected`} label="Date Collected" />
      </Grid>

      <Grid item xs={4} />

      <Grid item xs={4}>
        <TextField name={`${name}.specimenID`} label="Specimen ID" type="text" autoComplete="off" />
      </Grid>

      <Grid item xs={4}>
        <TextField
          name={`${name}.specimenStateLabResult`}
          label="State Lab Result"
          type="text"
          autoComplete="off"
        />
      </Grid>

      <Grid item xs={4} />

      <Grid item xs={4} />

      <Grid item xs={4}>
        <TextField
          name={`${name}.specimenCDCLabResult`}
          label="CDC Lab Result"
          type="text"
          autoComplete="off"
        />
      </Grid>
    </Grid>
  );
}

export default memo(Specimen);
