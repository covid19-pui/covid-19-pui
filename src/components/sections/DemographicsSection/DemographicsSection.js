import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useForm } from '../../FormProvider/FormProvider';
import SelectBox from 'components/forms/SelectBox';
import DateField from 'components/forms/DateField';
import TextField from 'components/forms/TextField';

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
  { value: 'years', label: 'Years' },
  { value: 'months', label: 'Months' },
  { value: 'days', label: 'Days' }
];

const sexOptions = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
  { value: 'other', label: 'Other' },
  { value: 'unknown', label: 'Unknown' }
];

function DemographicsSection() {
  const { form } = useForm();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <DateField id="dateOfBirth" label="Date of Birth" />
      </Grid>

      <Grid item xs={6}>
        <SelectBox id="ethnicity" label="Ethnicity" options={ethnicityOptions} />
      </Grid>

      <Grid item xs={3}>
        <TextField name="age" label="Age" type="number" />
      </Grid>

      <Grid item xs={3}>
        <SelectBox id="ageUnits" label="Age Units" options={ageUnitsOptions} />
      </Grid>

      <Grid item xs={6}>
        <SelectBox id="race" label="Race" options={raceOptions} />
      </Grid>

      <Grid item xs={6}>
        <SelectBox id="sex" label="Sex" options={sexOptions} />
      </Grid>

      {form.race === 'other' && (
        <Grid item xs={6}>
          <TextField name="otherRace" label="Other Race" />
        </Grid>
      )}
    </Grid>
  );
}

export default DemographicsSection;
