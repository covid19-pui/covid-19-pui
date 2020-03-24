import React from 'react';
import Grid from '@material-ui/core/Grid';

import { TextField, TelField } from 'components/forms';

function InterviewerSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <TextField
          name="interviewerFirstName"
          label="First Name of Interviewer"
          autoComplete="given-name"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          name="interviewerLastName"
          label="Last Name of Interviewer"
          autoComplete="family-name"
        />
      </Grid>

      <Grid item xs={6}>
        <TextField
          name="interviewerAffiliationOrganization"
          label="Affiliation / Organization"
          autoComplete="organization"
        />
      </Grid>

      <Grid item xs={6}>
        <TelField name="interviewerTelephone" label="Telephone" autoComplete="tel" />
      </Grid>

      <Grid item xs={6}>
        <TextField name="interviewerEmail" label="Email" type="email" autoComplete="email" />
      </Grid>
    </Grid>
  );
}

export default InterviewerSection;
