import React, { useState, useEffect, useMemo } from 'react';
import { unstable_batchedUpdates as batch } from 'react-dom';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';

import { AutocompleteField, DateField, SelectBox } from 'components/forms';

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
  const { values, setFieldValue, handleChange } = useFormikContext();
  const { states, error: statesError, stateId } = useStates();
  const { counties, error: countiesError } = useCounties(stateId[values.state?.value]);

  const testingOptions = testingStatusOptions[values.currentStatus];
  const stateOptions = useMemo(() => states.map(([state]) => ({ value: state, label: state })), [
    states
  ]);
  const countyOptions = useMemo(
    () =>
      counties.map(tuple => {
        let [county] = tuple[0].split('County', 1);
        county = county.trim();

        return { value: county, label: county };
      }),
    [counties]
  );

  if (statesError || countiesError) return <div>There was an error...</div>;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SelectBox
          name="currentStatus"
          label="Current Status"
          options={currentStatusOptions}
          onChange={e => {
            batch(() => {
              handleChange(e);
              setFieldValue('testingStatus', ''); // reset testing status
            });
          }}
        />
      </Grid>

      {testingOptions && (
        <Grid item xs={12}>
          <SelectBox name="testingStatus" label="Testing Status" options={testingOptions} />
        </Grid>
      )}

      <Grid item xs={6}>
        <DateField name="puiReportDate" label="Report Date of PUI to CDC" />
      </Grid>

      <Grid item xs={6}>
        <AutocompleteField name="state" label="State of Residence" options={stateOptions} />
      </Grid>

      <Grid item xs={6}>
        <DateField name="caseReportDate" label="Report Date of case to CDC" />
      </Grid>

      {countyOptions.length > 0 && (
        <Grid item xs={6}>
          <AutocompleteField name="county" label="County of Residence" options={countyOptions} />
        </Grid>
      )}
    </Grid>
  );
}

export default BasicInformationSection;
