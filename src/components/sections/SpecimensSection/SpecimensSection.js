import React, { memo } from 'react';
import { useFormikContext } from 'formik';
import { Grid } from '@material-ui/core';

import { FormGroup, RadioField } from 'components/forms';
import SpecimenGroups from './SpecimenGroups';
import useStyles from './styles';

const options = [
  { value: 'stateLabTested', label: 'State Lab Tested' },
  { value: 'sentToCDC', label: 'Sent to CDC' }
];

const specimenCollectedOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' }
];

export default function SpecimensSection(props) {
  const {
    values: { specimenCollected }
  } = useFormikContext();

  return <SpecimensSectionForm specimenCollected={specimenCollected} />;
}

const SpecimensSectionForm = memo(function SpecimensSectionForm({ specimenCollected }) {
  const styles = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RadioField
          name="specimenCollected"
          label={
            <>
              Has a <strong>specimen</strong> been collected from the patient?
            </>
          }
          options={specimenCollectedOptions}
        />
      </Grid>

      {specimenCollected === 'yes' && (
        <Grid container className={styles.root}>
          <FormGroup options={options} headerText="Specimen" textRows={2}>
            <SpecimenGroups />
          </FormGroup>
        </Grid>
      )}
    </Grid>
  );
});
