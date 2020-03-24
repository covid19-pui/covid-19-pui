import React, { memo, useMemo } from 'react';
import { unstable_batchedUpdates as batch } from 'react-dom';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';

import { AutocompleteField, DateField, SelectBox } from 'components/forms';
import { useStates, useCounties } from './hooks';

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

function BasicInformationSection() {
  const {
    values: { state, currentStatus },
    setFieldValue,
    handleChange
  } = useFormikContext();

  return (
    <BasicInformationSectionForm
      setFieldValue={setFieldValue}
      handleChange={handleChange}
      state={state}
      currentStatus={currentStatus}
    />
  );
}

const BasicInformationSectionForm = memo(function BasicInformationSection({
  setFieldValue,
  handleChange,
  state,
  currentStatus
}) {
  const { states, error: statesError, stateId } = useStates();
  const { counties, error: countiesError } = useCounties(stateId[state?.value]);

  const testingOptions = testingStatusOptions[currentStatus];
  const stateOptions = useMemo(() => states.map(([state]) => ({ value: state, label: state })), [
    states
  ]);
  const countyOptions = useMemo(
    () => counties.map(([county]) => ({ value: county, label: county.split(',', 1)[0] })),
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
});

export default BasicInformationSection;
