import React, { memo } from 'react';
import { useFormikContext } from 'formik';
import { Grid } from '@material-ui/core';

import { SelectBox, DateField, TextField, CheckboxField } from 'components/forms';
import useStyles from './styles';

const typeOptions = [
  { value: 'npSwab', label: 'NP Swab' },
  { value: 'opSwab', label: 'OP Swab' },
  { value: 'sputnum', label: 'Sputnum' },
  { value: 'other', label: 'Other' }
];

export default function Specimen({ name, id }) {
  const { values } = useFormikContext();
  const specimenType = values.specimens[id - 1].specimenType;

  return <SpecimenForm name={name} specimenType={specimenType} />;
}

const SpecimenForm = memo(function SpecimenForm({ name, specimenType }) {
  const styles = useStyles();

  return (
    <>
      <Grid container spacing={2} alignItems="center" className={styles['margin-bottom']}>
        <Grid item xs={4}>
          <SelectBox name={`${name}.specimenType`} label="Type" options={typeOptions} />
        </Grid>

        <Grid item xs={4}>
          <DateField name={`${name}.specimenDateCollected`} label="Date Collected" />
        </Grid>

        <Grid item xs={4}>
          <div className={styles.checkboxes}>
            <CheckboxField name={`${name}.stateLabTested`} className={styles['checkboxes-box']} />
            <CheckboxField name={`${name}.sentToCDC`} className={styles['checkboxes-box']} />
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" className={styles['margin-bottom']}>
        {specimenType === 'other' ? (
          <Grid item xs={4}>
            <TextField
              name={`${name}.specimenTypeOther`}
              label="Other Type"
              type="text"
              autoComplete="off"
            />
          </Grid>
        ) : (
          <Grid item xs={4}>
            <TextField
              name={`${name}.specimenID`}
              label="Specimen ID"
              type="text"
              autoComplete="off"
            />
          </Grid>
        )}

        <Grid item xs={4}>
          <TextField
            name={`${name}.specimenStateLabResult`}
            label="State Lab Result"
            type="text"
            autoComplete="off"
          />
        </Grid>

        <Grid item xs={4} />
      </Grid>

      <Grid container spacing={2} alignItems="center" className={styles['margin-bottom']}>
        {specimenType === 'other' ? (
          <Grid item xs={4}>
            <TextField
              name={`${name}.specimenID`}
              label="Specimen ID"
              type="text"
              autoComplete="off"
            />
          </Grid>
        ) : (
          <Grid item xs={4} />
        )}

        <Grid item xs={4}>
          <TextField
            name={`${name}.specimenCDCLabResult`}
            label="CDC Lab Result"
            type="text"
            autoComplete="off"
          />
        </Grid>
      </Grid>
    </>
  );
});
