import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';

import RadioField from 'components/forms/RadioField';
import TestingGroups from './TestingGroups';

const initialOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' }
];

export default function TestingSection() {
  return <TestingSectionForm />;
}

const TestingSectionForm = memo(function TestingSectionForm() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RadioField
          name="respiratoryTesting"
          label={
            <>
              Has <strong>respiratory diagnostic testing</strong> been performed on the patient?
            </>
          }
          options={initialOptions}
        />
      </Grid>

      <TestingGroups />
    </Grid>
  );
});
