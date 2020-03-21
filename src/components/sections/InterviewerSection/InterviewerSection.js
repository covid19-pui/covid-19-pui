import React from 'react';
import Grid from '@material-ui/core/Grid';

import TextField from 'components/forms/TextField';

function InterviewerSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <TextField name="interviewerFirstName" label="First Name of Interviewer" />
      </Grid>

      <Grid item xs={6}>
        <TextField name="interviewerLastName" label="Last Name of Interviewer" />
      </Grid>

      <Grid item xs={6}>
        <TextField name="interviewerAffiliationOrganization" label="Affiliation / Organization" />
      </Grid>

      <Grid item xs={6}>
        <TextField name="interviewerTelephone" label="Telephone" type="tel" />
      </Grid>

      <Grid item xs={6}>
        <TextField name="interviewerEmail" label="Email" type="email" />
      </Grid>
    </Grid>
  );
}

export default InterviewerSection;
