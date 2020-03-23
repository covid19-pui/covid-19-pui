import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { RadioField, FormGroup, FormGroupDivider, SelectBox } from 'components/forms';
import useStyles from './styles';

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
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <SelectBox
                name="locationTraveledTo"
                label="Location Traveled To"
                options={locationOptions}
              />
            </Grid>
            <FontAwesomeIcon icon={faPlusSquare} className={styles.plusIcon} />
          </Grid>
        )}
      </FormGroup>
    </>
  );
}

export default ExposureSection;
