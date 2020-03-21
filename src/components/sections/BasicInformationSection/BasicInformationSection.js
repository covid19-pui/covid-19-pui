import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import { useForm } from '../../FormProvider/FormProvider';
import DateField from 'components/forms/DateField';
import SelectBox from 'components/forms/SelectBox';

const currentStatusOptions = [
  { value: 'pui', label: 'PUI, tested (performed by state, local, or CDC lab)' },
  { value: 'presumptive', label: 'Presumptive case (positive local test)' },
  { value: 'laboratory-confirmed', label: 'Laboratory-confirmed case' }
];

const testingStatusOptions = {
  pui: [
    { value: 'pui-pending', label: 'Testing pending' },
    { value: 'pui-negative', label: 'Testing negative' }
  ],
  presumptive: [
    { value: 'confirmatory-pending', label: 'Confirmatory testing pending' },
    { value: 'confirmatory-negative', label: 'Confirmatory tested negative' }
  ]
};

async function fetchStates() {
  const res = await fetch('https://api.census.gov/data/2010/dec/sf1?get=NAME&for=state:*');
  return res.json().then(res => res.slice(1));
}

async function fetchCounties(stateId) {
  const res = await fetch(
    `https://api.census.gov/data/2010/dec/sf1?get=NAME&for=county:*&in=state:${stateId}`
  );
  return res.json().then(res => res.slice(1));
}

function useStates() {
  const [data, setData] = useState({ loading: true, error: null, states: [], stateId: {} });

  useEffect(() => {
    fetchStates()
      .then(states => {
        const stateId = states.reduce((map, state) => ({ ...map, [state[0]]: state[1] }), {});
        setData({ loading: false, errors: null, states, stateId });
      })
      .catch(error => setData({ loading: false, error, states: [], stateId: {} }));
  }, []);

  return data;
}

function useCounties(stateId) {
  const [data, setData] = useState({ loading: false, error: null, counties: [] });

  useEffect(() => {
    if (stateId == null) return;

    setData(data => ({ ...data, loading: true, counties: [] }));
    fetchCounties(stateId)
      .then(counties => setData({ loading: false, error: null, counties }))
      .catch(error => setData({ loading: false, error, counties: [] }));
  }, [stateId]);

  return data;
}

function BasicInformationSection() {
  const { form } = useForm();
  const { states, error: statesError, stateId } = useStates();
  const { counties, error: countiesError } = useCounties(stateId[form.state]);

  const testingOptions = testingStatusOptions[form.currentStatus];
  const stateOptions = states.map(tuple => {
    const state = tuple[0];
    return { value: state, label: state };
  });
  const countyOptions = counties.map(tuple => {
    const county = tuple[0].split('County,')[0];
    return { value: county, label: county };
  });

  if (statesError || countiesError) return <div>There was an error...</div>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SelectBox id="currentStatus" label="Current Status" options={currentStatusOptions} />
      </Grid>

      {testingOptions && (
        <Grid item xs={12}>
          <SelectBox id="testingStatus" label="Testing Status" options={testingOptions || []} />
        </Grid>
      )}

      <Grid item xs={6}>
        <DateField id="puiReportDate" label="Report Date of PUI to CDC" />
      </Grid>

      <Grid item xs={6}>
        <SelectBox id="state" label="State of Residence" options={stateOptions} />
      </Grid>

      <Grid item xs={6}>
        <DateField id="caseReportDate" label="Report Date of case to CDC" />
      </Grid>

      {countyOptions.length > 0 && (
        <Grid item xs={6}>
          <SelectBox id="county" label="County of Residence" options={countyOptions} />
        </Grid>
      )}
    </Grid>
  );
}

export default BasicInformationSection;
