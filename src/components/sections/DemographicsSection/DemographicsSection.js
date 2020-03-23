import React, { memo, useCallback } from 'react';
import { unstable_batchedUpdates as batch } from 'react-dom';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

import { SelectBox, DateField, TextField } from 'components/forms';

const ethnicityOptions = [
  { value: 'hispanicLatino', label: 'Hispanic / Latino' },
  { value: 'nonHispanicLatino', label: 'Non-Hispanic / Latino' },
  { value: 'notSpecified', label: 'Not Specified' }
];

const raceOptions = [
  { value: 'asian', label: 'Asian' },
  { value: 'black', label: 'Black' },
  { value: 'white', label: 'White' },
  { value: 'americanIndianAlaskaNative', label: 'American Indian / Alaska Native' },
  {
    value: 'nativeHawaiianOtherPacificIslander',
    label: 'Native Hawaiian / Other Pacific Islander'
  },
  { value: 'unknown', label: 'Unknown' },
  { value: 'other', label: 'Other' }
];

const ageUnitsOptions = [
  { value: 'years', label: 'Year(s)' },
  { value: 'months', label: 'Month(s)' },
  { value: 'days', label: 'Day(s)' }
];

const sexOptions = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' },
  { value: 'unknown', label: 'Unknown' }
];

function DemographicsSection() {
  const {
    values: { race },
    setFieldValue
  } = useFormikContext();

  return <DemographicsSectionForm setFieldValue={setFieldValue} race={race} />;
}

const DemographicsSectionForm = memo(function DemographicsSectionForm({ setFieldValue, race }) {
  const handleBirthdayChange = useCallback(
    date => {
      batch(() => {
        setFieldValue('dateOfBirth', date);
        if (!isNaN(date)) {
          const now = new Date();
          const dayDiff = differenceInDays(now, date);
          const monthDiff = differenceInMonths(now, date);
          const yearDiff = differenceInYears(now, date);

          if (dayDiff <= 0) return;
          else if (monthDiff === 0) {
            setFieldValue('age', dayDiff);
            setFieldValue('ageUnits', 'days');
          } else if (monthDiff <= 12) {
            setFieldValue('age', monthDiff);
            setFieldValue('ageUnits', 'months');
          } else {
            setFieldValue('age', yearDiff);
            setFieldValue('ageUnits', 'years');
          }
        }
      });
    },
    [setFieldValue]
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <DateField name="dateOfBirth" label="Date of Birth" onChange={handleBirthdayChange} />
      </Grid>

      <Grid item xs={6}>
        <SelectBox name="ethnicity" label="Ethnicity" options={ethnicityOptions} />
      </Grid>

      <Grid item xs={3}>
        <TextField name="age" label="Age" type="text" autoComplete="off" />
      </Grid>

      <Grid item xs={3}>
        <SelectBox name="ageUnits" label="Age Units" options={ageUnitsOptions} />
      </Grid>

      <Grid item xs={6}>
        <SelectBox name="race" label="Race" options={raceOptions} />
      </Grid>

      <Grid item xs={6}>
        <SelectBox name="sex" label="Sex" options={sexOptions} />
      </Grid>

      {race === 'other' && (
        <Grid item xs={6}>
          <TextField name="otherRace" label="Other Race" autoComplete="off" />
        </Grid>
      )}
    </Grid>
  );
});

export default DemographicsSection;
