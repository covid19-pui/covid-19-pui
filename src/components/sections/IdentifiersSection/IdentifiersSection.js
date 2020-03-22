import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useForm } from 'components/FormProvider';
import TextField from 'components/forms/TextField';
import RadioField from 'components/forms/RadioField';

const options = [
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' }
];

function IdentifiersSection() {
  const { form } = useForm();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RadioField
          name="knownContact"
          label="Is the case-patient a known contact of a prior source case-patient?"
          options={options}
        />
      </Grid>

      {form.knownContact === 'true' && (
        <Grid item xs={12}>
          <TextField
            name="contactId"
            label="Contact ID"
            helperText="Assign Contact ID using CDC 2019-nCoV ID and sequential contact ID, e.g., Confirmed case CA102034567 has contacts CA102034567 -01 and CA102034567 -02"
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <TextField name="reportingJurisdiction" label="Reporting Jurisdiction" />
      </Grid>

      <Grid item xs={12}>
        <TextField name="reportingHealthDept" label="Reporting Health Department" />
      </Grid>

      <Grid item xs={4}>
        <TextField name="caseStateLocalId" label="Case State / Local ID" />
      </Grid>

      <Grid item xs={4}>
        <TextField name="CDC2019nCoVID" label="CDC 2019-nCoV ID" />
      </Grid>

      <Grid item xs={4}>
        <TextField
          name="NNDSSCaseId"
          label="NNDSS Loc. Rec. ID / Case ID"
          helperText="For NNDSS reporters, use GenV2 or NETSS patient identifier"
        />
      </Grid>
    </Grid>
  );
}

export default IdentifiersSection;
