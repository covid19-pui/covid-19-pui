import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateField from 'components/forms/DateField';
import SelectBox from 'components/forms/SelectBox';

const currentStatusOptions = [
  { value: 'pui', label: 'PUI, tested (performed by state, local, or CDC lab)' },
  { value: 'presumptive', label: 'Presumptive case (positive local test)' },
  { value: 'laboratory-confirmed', label: 'Laboratory-confirmed case' }
];

// TODO: Dynamically adjust based on current status selected
const testingStatusOptions = [
  { value: 'pui-pending', label: 'Testing pending' },
  { value: 'pui-negative', label: 'Testing negative' },
  { value: 'confirmatory-pending', label: 'Confirmatory testing pending' },
  { value: 'confirmatory-negative', label: 'Confirmatory tested negative' }
];

// TODO: Get states and territories database / api
const stateOptions = [
  { value: 'MA', label: 'Massachusetts' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'RI', label: 'Rhode Island' }
];

// TODO: Get counties database / api
const countyOptions = [
  { value: 'County1', label: 'County 1' },
  { value: 'County2', label: 'County 2' },
  { value: 'County3', label: 'County 3' }
];

function BasicInformationSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SelectBox id="currentStatus" label="Current Status" options={currentStatusOptions} />
      </Grid>
      <Grid item xs={12}>
        <SelectBox id="testingStatus" label="Testing Status" options={testingStatusOptions} />
      </Grid>
      <Grid item xs={6}>
        <DateField id="puiReportDate" label="Report Date of PUI to CDC" />
      </Grid>
      <Grid item xs={6}>
        <SelectBox id="state" label="State of Residence" options={stateOptions} />
      </Grid>
      <Grid item xs={6}>
        <DateField id="caseReportDate" label="Report Date of case to CDC" />
      </Grid>
      <Grid item xs={6}>
        <SelectBox id="county" label="County of Residence" options={countyOptions} />
      </Grid>
    </Grid>
  );
}

export default BasicInformationSection;
