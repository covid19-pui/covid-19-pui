import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { FieldArray, useFormikContext } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormGroupDivider, RadioField, SelectBox } from 'components/forms';
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
      <Grid item xs={6}>
        {children}
      </Grid>
      {icons}
    </Grid>
  );
}

const LocationsTraveled = withMultipleSelections(SelectBox, <GridWrapper />);

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
          <LocationsTraveled
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
