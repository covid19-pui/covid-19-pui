import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';

import RadioField from 'components/forms/RadioField';

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unknown', label: 'Unknown' }
];

function HistorySection() {
  const { values } = useFormikContext();

  return (
    <Grid container spacing={3}>
      {values.sex !== 'male' && (
        <Grid item xs={12}>
          <RadioField name="pregnant" label="Is the case-patient pregnant?" options={options} />
        </Grid>
      )}

      <Grid item xs={12}>
        <RadioField
          name="currentSmoker"
          label="Is the case-patient a current smoker?"
          options={options}
        />
      </Grid>

      <Grid item xs={12}>
        <RadioField
          name="formerSmoker"
          label="Is the case-patient a former smoker?"
          options={options}
        />
      </Grid>
    </Grid>
  );
}

export default HistorySection;
