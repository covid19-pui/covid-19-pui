import React, { useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import { FieldArray, useFormikContext } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormGroupDivider, RadioField, SelectBox, TextField } from 'components/forms';
import useStyles from './styles';
import withMultipleSelections from 'components/forms/MultipleSelections/MultipleSelections';

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unknown', label: 'Unknown' }
];

const locationOptions = [
  { value: 'wuhan', label: 'Wuhan' },
  { value: 'hubei', label: 'Hubei' },
  { value: 'mainlandChina', label: 'Mainland China' },
  { value: 'nonUSCountry', label: 'Non-US Country' }
];

function GridWrapper({ children, icons }) {
  const styles = useStyles();
  return (
    <Grid container alignItems="center" className={styles.locationSelection}>
      {children}
    </Grid>
  );
}

function TextSelectBox({ name, label, icons }) {
  return (
    <>
      <Grid item xs={6}>
        <TextField name={name} label={label} type="text" autoComplete="off" />
      </Grid>
      {icons}
    </>
  );
}

const MultipleTextBox = withMultipleSelections(TextSelectBox, <GridWrapper />);

function LocationSelectBox({ name, label, options, icons }) {
  const { values } = useFormikContext();
  const locationName = useMemo(() => {
    return <MultipleTextBox name="nonUSCountryNames" label="Non-US Country Name" />;
  }, []);
  return (
    <>
      <Grid item xs={6}>
        <SelectBox name={name} label={label} options={options} />
      </Grid>
      {icons}

      {name.split('.').reduce((acc, index) => {
        return acc[index];
      }, values) === 'nonUSCountry' && locationName}
    </>
  );
}

const MultipleLocationSelection = withMultipleSelections(LocationSelectBox, <GridWrapper />);

function ExposureSection() {
  const styles = useStyles();
  const { values } = useFormikContext();
  return (
    <>
      <FormGroup options={options}>
        <Grid item xs={12}>
          <RadioField
            name="heathCareWorker"
            label={
              <>
                Is the patient a <strong> health care worker </strong> in the United States?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>
        <FormGroupDivider />
        <Grid item xs={12} className={styles['margin-bottom']}>
          <RadioField
            name="historyInChinaHealthcareFacility"
            label={
              <>
                {' '}
                Does the patient have <strong>
                  a history of being in a healthcare facility
                </strong>{' '}
                (as a patient, worker or vistor) <strong>in China</strong>?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>
      </FormGroup>
      <FormGroup options={options} headerText="In the 14 days prior to illness onset...">
        <Grid item xs={12}>
          <RadioField
            name="travelOutsideUS"
            label={
              <>
                Did the patient <strong>travel outside of the US</strong>
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>
        {values.travelOutsideUS === 'yes' && (
          <MultipleLocationSelection
            name="locationsTraveledTo"
            options={locationOptions}
            label="Location Traveled To"
          />
        )}
      </FormGroup>
    </>
  );
}

export default ExposureSection;
