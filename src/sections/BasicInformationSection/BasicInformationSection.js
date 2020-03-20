import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateField from 'components/forms/DateField';

function BasicInformationSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        Current Status goes here
      </Grid>
      <Grid item xs={12}>
        Testing Status goes here
      </Grid>
      <Grid item xs={6}>
        <DateField id="puiReportDate" label="Report Date of PUI to CDC" />
      </Grid>
      <Grid item xs={6}>
        State of Residence goes here
      </Grid>
      <Grid item xs={6}>
        <DateField id="caseReportDate" label="Report Date of case to CDC" />
      </Grid>
      <Grid item xs={6}>
        County of Residence goes here
      </Grid>
    </Grid>
  );
}

export default BasicInformationSection;
