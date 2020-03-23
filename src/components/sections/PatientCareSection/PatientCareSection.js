import React from 'react';
import { unstable_batchedUpdates as batch } from 'react-dom';
import { useFormikContext } from 'formik';
import Grid from '@material-ui/core/Grid';

import { FormGroup, FormGroupDivider } from 'components/forms/FormGroup';
import RadioField from 'components/forms/RadioField';
import DateField from 'components/forms/DateField';
import CheckboxField from 'components/forms/CheckboxField';
import TextField from 'components/forms/TextField';
import useStyles from './styles';

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unknown', label: 'Unknown' }
];

function PatientCareSection() {
  const styles = useStyles();
  const { values, setFieldValue, handleChange } = useFormikContext();

  return (
    <FormGroup options={options}>
      <Grid item xs={12}>
        <RadioField
          name="positiveSpecimenCollected"
          label={
            <>
              Was a <strong>positive specimen</strong> collected for the patient?
            </>
          }
          options={options}
          inFormGroup
          onChange={e => {
            batch(() => {
              handleChange(e);
              setFieldValue('firstPositiveSpecimenDate', null);
              setFieldValue('firstPositiveSpecimenDateUnknown', '');
            });
          }}
        />
      </Grid>

      {values.positiveSpecimenCollected === 'yes' && (
        <Grid container alignItems="center" className={styles['margin-bottom']}>
          <Grid item xs={4}>
            <DateField
              name="firstPositiveSpecimenDate"
              label="Date of First Positive Specimen Collection"
              disabled={Boolean(values.firstPositiveSpecimenDateUnknown)}
            />
          </Grid>

          <Grid item xs={4}>
            <CheckboxField
              name="firstPositiveSpecimenDateUnknown"
              label="Unknown Date"
              onChange={e => {
                batch(() => {
                  handleChange(e);
                  setFieldValue('firstPositiveSpecimenDate', null);
                });
              }}
            />
          </Grid>
        </Grid>
      )}

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="pneumonia"
          label={
            <>
              Did the patient develop <strong>pneumonia</strong>?
            </>
          }
          options={options}
          inFormGroup
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="acuteRespiratoryDistressSyndrome"
          label={
            <>
              Did the patient have <strong>acute respiratory distress syndrome</strong>?
            </>
          }
          options={options}
          inFormGroup
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="anotherDiagnosisEtiology"
          label={
            <>
              Did the patient have <strong>another diagnosis/etiology</strong> for their illness?
            </>
          }
          options={options}
          inFormGroup
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="abnormalChestXray"
          label={
            <>
              Did the patient have an <strong>abnormal chest X-ray</strong>?
            </>
          }
          options={options}
          inFormGroup
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="hospitalized"
          label={
            <>
              Was the patient <strong>hospitalized</strong>?
            </>
          }
          options={options}
          inFormGroup
          onChange={e => {
            batch(() => {
              handleChange(e);
              setFieldValue('admissionDate', null);
              setFieldValue('dischargeDate', null);
            });
          }}
        />
      </Grid>

      {values.hospitalized === 'yes' && (
        <Grid container alignItems="center" className={styles['margin-bottom']}>
          <Grid item xs={4} className={styles['margin-bottom']}>
            <DateField
              name="admissionDate"
              label="Admission Date"
              disabled={Boolean(values.admissionDateUnknown)}
            />
          </Grid>

          <Grid item xs={2}>
            <CheckboxField
              name="admissionDateUnknown"
              label="Unknown Date"
              onChange={e => {
                batch(() => {
                  handleChange(e);
                  setFieldValue('admissionDate', null);
                });
              }}
            />
          </Grid>

          <Grid item xs={6} />

          <Grid item xs={4}>
            <DateField
              name="dischargeDate"
              label="Discharge Date"
              disabled={
                Boolean(values.dischargeDateUnknown) || Boolean(values.dischargeDateNotApplicable)
              }
            />
          </Grid>

          <Grid item xs={1}>
            <CheckboxField
              name="dischargeDateNotApplicable"
              label="N/A"
              onChange={e => {
                batch(() => {
                  handleChange(e);
                  setFieldValue('dischargeDate', null);
                  setFieldValue('dischargeDateUnknown', '');
                });
              }}
            />
          </Grid>

          <Grid item xs={2}>
            <CheckboxField
              name="dischargeDateUnknown"
              label="Unknown Date"
              onChange={e => {
                batch(() => {
                  handleChange(e);
                  setFieldValue('dischargeDate', null);
                  setFieldValue('dischargeDateNotApplicable', '');
                });
              }}
            />
          </Grid>
        </Grid>
      )}

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="intensiveCareUnit"
          label={
            <>
              Was the patient admitted to an <strong>intensive care unit (ICU)</strong>?
            </>
          }
          options={options}
          inFormGroup
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="mechanicalVentilationIntubation"
          label={
            <>
              Did the patient receive <strong>mechanical ventilation (MV)/intubation</strong>?
            </>
          }
          options={options}
          inFormGroup
          onChange={e => {
            batch(() => {
              handleChange(e);
              setFieldValue('totalDaysWithMV', '');
            });
          }}
        />
      </Grid>

      {values.mechanicalVentilationIntubation === 'yes' && (
        <Grid item xs={4} className={styles['margin-bottom']}>
          <TextField
            name="totalDaysWithMV"
            label="Total Days with MV"
            type="text"
            autoComplete="off"
          />
        </Grid>
      )}

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="ecmo"
          label={
            <>
              Did the patient receive <strong>ECMO</strong>?
            </>
          }
          options={options}
          inFormGroup
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="death"
          label={
            <>
              Did the patient <strong>die as a result</strong> of this illness?
            </>
          }
          options={options}
          inFormGroup
          onChange={e => {
            batch(() => {
              handleChange(e);
              setFieldValue('deathDate', null);
              setFieldValue('deathDateUnknown', '');
            });
          }}
        />
      </Grid>

      {values.death === 'yes' && (
        <Grid container alignItems="center" className={styles['margin-bottom']}>
          <Grid item xs={4}>
            <DateField
              name="deathDate"
              label="Date of Death"
              disabled={Boolean(values.deathDateUnknown)}
            />
          </Grid>

          <Grid item xs={4}>
            <CheckboxField
              name="deathDateUnknown"
              label="Unknown Date"
              onChange={e => {
                batch(() => {
                  handleChange(e);
                  setFieldValue('deathDate', null);
                });
              }}
            />
          </Grid>
        </Grid>
      )}
    </FormGroup>
  );
}

export default PatientCareSection;
