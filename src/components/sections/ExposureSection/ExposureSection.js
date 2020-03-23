import React, { useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { FieldArray, useFormikContext } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

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
        {values.travelOutsideUS === 'yes' && <LocationsTraveled />}
      </FormGroup>
    </>
  );
}

function LocationSelection({ name, withIcon, onChange, onClick }) {
  const styles = useStyles();
  return (
    <Grid container alignItems="center" className={styles.locationSelection}>
      <Grid item xs={6}>
        <SelectBox
          name={name}
          label="Location Traveled To"
          options={locationOptions}
          onChange={onChange}
        />
      </Grid>
      {withIcon &&
        [withIcon]
          .flat()
          .map(({ icon, onClick }) => (
            <FontAwesomeIcon icon={icon} className={styles.icon} onClick={onClick} />
          ))}
    </Grid>
  );
}

function LocationsTraveled() {
  const { values } = useFormikContext();
  const name = 'locationsTraveledTo';
  const onChange = useCallback((helpers, index) => {
    return event => {
      helpers.replace(index, event.target.value);
    };
  }, []);

  const plusIcon = useCallback((helpers, index) => {
    return { icon: faPlusSquare, onClick: () => helpers.insert(index + 1, '') };
  }, []);

  const minusIcon = useCallback((helpers, index) => {
    return { icon: faMinusSquare, onClick: () => helpers.remove(index) };
  }, []);

  return (
    <FieldArray
      name={name}
      render={arrayHelpers => (
        <>
          <LocationSelection
            name={`${name}.0`}
            withIcon={
              values[name].length > 1 ? minusIcon(arrayHelpers, 0) : plusIcon(arrayHelpers, 0)
            }
            onChange={onChange(arrayHelpers, 0)}
          />
          {values.locationsTraveledTo &&
            values.locationsTraveledTo
              .slice(1, values.locationsTraveledTo.length - 1)
              .map((location, index) => (
                <LocationSelection
                  name={`${name}.${index + 1}`}
                  withIcon={minusIcon(arrayHelpers, index + 1)}
                  onChange={onChange(arrayHelpers, index + 1)}
                />
              ))}
          {values[name].length > 1 && (
            <LocationSelection
              name={`${name}.${values[name].length - 1}`}
              withIcon={[
                minusIcon(arrayHelpers, values[name].length - 1),
                plusIcon(arrayHelpers, values[name].length - 1)
              ]}
            />
          )}
        </>
      )}
    />
  );
}

export default ExposureSection;
