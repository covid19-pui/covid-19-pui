import React, { memo } from 'react';
import { unstable_batchedUpdates as batch } from 'react-dom';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';

import { FormGroup, FormGroupDivider, RadioField, SelectBox, TextField } from 'components/forms';
import useObjectSlice from 'hooks/useObjectSlice';
import useStyles from './styles';

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unknown', label: 'Unknown' }
];

const locationOptions = [
  { value: 'wuhan', label: 'Wuhan' },
  { value: 'hubei', label: 'Hubei' },
  { value: 'mainlandChina', label: 'Mainland China' }
];

const sourceOfContactOptions = [
  { value: 'household', label: 'Household' },
  { value: 'community', label: 'Community' },
  { value: 'healthcare', label: 'Healthcare' }
];

const healthcareContactOptions = [
  { value: 'patient', label: 'Patient' },
  { value: 'visitor', label: 'Visitor' },
  { value: 'healthcare worker', label: 'Healthcare Worker' }
];

const REQUIRED_VALUES = [
  'contactWithCOVIDpatient',
  'contactWithCOVIDpatient',
  'sourceContactUSCase',
  'sourceNotListed',
  'sourceOfContact',
  'travelOutsideUS',
  'travelToChina'
];

function ExposureSection() {
  const { values, handleChange, setFieldValue } = useFormikContext();
  const formValues = useObjectSlice(values, REQUIRED_VALUES);

  return (
    <ExposureSectionForm
      values={formValues}
      handleChange={handleChange}
      setFieldValue={setFieldValue}
    />
  );
}

const ExposureSectionForm = memo(function ExposureSectionForm({
  values,
  handleChange,
  setFieldValue
}) {
  const styles = useStyles();

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
            name="travelToChina"
            label={
              <>
                Did the patient <strong>travel to China</strong>?
              </>
            }
            options={options}
            onChange={e => {
              batch(() => {
                handleChange(e);
                setFieldValue('chinaLocationsTraveledTo', ['']);
              });
            }}
            inFormGroup
          />
        </Grid>

        {values.travelToChina === 'yes' && (
          <Grid container direction="column">
            <Grid item xs={4}>
              <SelectBox
                name="chinaLocationsTraveledTo"
                label="Location Traveled To"
                options={locationOptions}
                allowMultiple
              />
            </Grid>
          </Grid>
        )}

        <FormGroupDivider />

        <Grid item xs={12}>
          <RadioField
            name="travelOutsideUS"
            label={
              <>
                Did the patient <strong>travel to a Non-US Country besides China</strong>?
              </>
            }
            onChange={e => {
              batch(() => {
                handleChange(e);
                setFieldValue('travelToNonUS', ['']);
              });
            }}
            options={options}
            inFormGroup
          />
        </Grid>

        {values.travelOutsideUS === 'yes' && (
          <Grid container direction="column">
            <Grid item xs={4}>
              <TextField
                name="travelToNonUS"
                label="Location Traveled To"
                type="text"
                autoComplete="new-password"
                allowMultiple
              />
            </Grid>
          </Grid>
        )}

        <FormGroupDivider />

        <Grid item xs={12}>
          <RadioField
            name="contactWithCOVIDpatient"
            label={
              <>
                Did the patient come into <strong>contact with another COVID-19 patient</strong>?
              </>
            }
            options={options}
            onChange={e => {
              batch(() => {
                handleChange(e);
                setFieldValue('sourceOfContact', ['']);
                setFieldValue('healthcareContact', '');
                setFieldValue('sourceContactUSCase', '');
                setFieldValue('sourceContactCaseID', '');
              });
            }}
            inFormGroup
          />
        </Grid>

        {values.contactWithCOVIDpatient === 'yes' && (
          <Grid container direction="column">
            <Grid item xs={4}>
              <SelectBox
                name="sourceOfContact"
                label="Source of Contact"
                options={sourceOfContactOptions}
                allowMultiple
                onChange={e => {
                  batch(() => {
                    handleChange(e);
                    setFieldValue('healthcareContact', '');
                  });
                }}
              />
            </Grid>
          </Grid>
        )}

        {values.sourceOfContact.indexOf('healthcare') >= 0 && (
          <Grid container item xs={4} direction="column">
            <Grid item xs={11} className={styles['margin-bottom']}>
              <SelectBox
                name="healthcareContact"
                label="Source of Healthcare Contact"
                options={healthcareContactOptions}
              />
            </Grid>
          </Grid>
        )}

        {values.contactWithCOVIDpatient === 'yes' && (
          <>
            <FormGroupDivider />

            <Grid item xs={12}>
              <RadioField
                name="sourceContactUSCase"
                label={<>Was this COVID-19 source case-patient a U.S. case?</>}
                options={options}
                onChange={e => {
                  batch(() => {
                    handleChange(e);
                    setFieldValue('sourceContactCaseID', '');
                  });
                }}
                inFormGroup
              />
            </Grid>

            {values.sourceContactUSCase === 'yes' && (
              <Grid container direction="column" className={styles['margin-bottom']}>
                <Grid item xs={4}>
                  <TextField
                    name="sourceContactCaseID"
                    label="nCoV ID of Source Case"
                    options={sourceOfContactOptions}
                  />
                </Grid>
              </Grid>
            )}
          </>
        )}

        <FormGroupDivider />

        <Grid item xs={12}>
          <RadioField
            name="animalExposure"
            label={
              <>
                Was the patient <strong>exposed from an animal</strong>?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>

        <FormGroupDivider />

        <Grid item xs={12}>
          <RadioField
            name="exposureToCluster"
            label={
              <>
                Was the patient{' '}
                <strong>
                  exposed to a cluster of patients with severe acute lower respiratory distress
                </strong>{' '}
                of unknown etiology?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>

        <FormGroupDivider />

        <Grid item xs={12}>
          <RadioField
            name="sourceNotListed"
            label={
              <>
                Was the patient <strong>exposed from a source not listed here</strong>?
              </>
            }
            onChange={e => {
              batch(() => {
                handleChange(e);
                setFieldValue('sourceNotListedSource', '');
              });
            }}
            options={options}
            inFormGroup
          />
        </Grid>
      </FormGroup>

      {values.sourceNotListed === 'yes' && (
        <Grid container direction="column">
          <Grid item xs={4}>
            <TextField name="sourceNotListedSource" label="Source of Exposure" />
          </Grid>
        </Grid>
      )}
    </>
  );
});

export default ExposureSection;
