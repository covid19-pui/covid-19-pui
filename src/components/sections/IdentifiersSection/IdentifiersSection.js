import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';

import { TextField, RadioField } from 'components/forms';

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' }
];

function IdentifiersSection() {
  const {
    values: { knownContact }
  } = useFormikContext();

  return <IdentifiersSectionForm knownContact={knownContact} />;
}

const IdentifiersSectionForm = memo(function IdentifiersSectionForm({ knownContact }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RadioField
          name="knownContact"
          label="Is the case-patient a known contact of a prior source case-patient?"
          options={options}
        />
      </Grid>

      {knownContact === 'yes' && (
        <Grid item xs={12}>
          <TextField
            name="contactId"
            label="Contact ID"
            helperText="Assign Contact ID using CDC 2019-nCoV ID and sequential contact ID, e.g., Confirmed case CA102034567 has contacts CA102034567 -01 and CA102034567 -02"
            autoComplete="new-password"
          />
        </Grid>
      )}

      <Grid item xs={12}>
        <TextField
          name="reportingJurisdiction"
          label="Reporting Jurisdiction"
          autoComplete="new-password"
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          name="reportingHealthDept"
          label="Reporting Health Department"
          autoComplete="new-password"
        />
      </Grid>

      <Grid item xs={4}>
        <TextField
          name="caseStateLocalId"
          label="Case State / Local ID"
          autoComplete="new-password"
        />
      </Grid>

      <Grid item xs={4}>
        <TextField name="CDC2019nCoVID" label="CDC 2019-nCoV ID" autoComplete="new-password" />
      </Grid>

      <Grid item xs={4}>
        <TextField
          name="NNDSSCaseId"
          label="NNDSS Loc. Rec. ID / Case ID"
          helperText="For NNDSS reporters, use GenV2 or NETSS patient identifier"
          autoComplete="new-password"
        />
      </Grid>
    </Grid>
  );
});

export default IdentifiersSection;
