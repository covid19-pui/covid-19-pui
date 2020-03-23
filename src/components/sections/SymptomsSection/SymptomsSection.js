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

function SymptomsSection() {
  const styles = useStyles();
  const { values, setFieldValue, handleChange } = useFormikContext();

  return (
    <>
      <FormGroup options={options}>
        <Grid item xs={12}>
          <RadioField
            name="isSymptomatic"
            label={
              <>
                Is the patient <strong>currently syptomatic</strong>?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>

        <Grid container alignItems="center" className={styles['margin-bottom']}>
          <Grid item xs={4}>
            <DateField
              name="dateOfSymptomResolution"
              label="Date of Symptom Resolution"
              disabled={!values.isSymptomatic}
            />
          </Grid>

          <Grid item xs={4}>
            <CheckboxField
              name="dateOfSymptomResolutionUnknown"
              label="Unknown Date"
              onChange={e => {
                batch(() => {
                  handleChange(e);
                  setFieldValue('dateOfSymptomResolution', null);
                });
              }}
            />
          </Grid>
        </Grid>
        <FormGroupDivider />

        <Grid item xs={12}>
          <RadioField
            name="presentedSymptoms"
            label={
              <>
                Has the patient presented <strong>symptoms</strong> duroing the course of the
                illness?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid container alignItems="center" className={styles['margin-bottom']}>
          <Grid item xs={4}>
            <DateField
              name="symptomOnsetDate"
              label="Onset Date"
              disabled={values.presentedSymptoms}
            />
          </Grid>

          <Grid item xs={4}>
            <CheckboxField
              name="onsetDateUnknown"
              label="Unknown Date"
              onChange={e => {
                batch(() => {
                  handleChange(e);
                  setFieldValue('symptomOnsetDate', null);
                });
              }}
            />
          </Grid>
        </Grid>
      </FormGroup>

      <FormGroup headerText="During this illness, did the patient experience..." options={options}>
        <Grid item xs={12}>
          <RadioField
            name="symptom104Fever"
            label="Fever >100.4F (38C)"
            options={options}
            inFormGroup
          />
        </Grid>

        <Grid item xs={12}>
          <RadioField
            name="symptomSubectiveFever"
            label="Subjective fever (felt feverish)"
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid item xs={12}>
          <RadioField name="symptomChills" label="Chills" options={options} inFormGroup />
        </Grid>
        <Grid item xs={12}>
          <RadioField
            name="symptomMuscleAches"
            label="Muscle aches (myalgia)"
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid item xs={12}>
          <RadioField
            name="symptomRhinorrhea"
            label="Running nose (rhinorrhea)"
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid item xs={12}>
          <RadioField name="symptomSoreThroat" label="Sore Throat" options={options} inFormGroup />
        </Grid>
        <Grid item xs={12}>
          <RadioField
            name="symptomCough"
            label="Cough (new onset or worsening of chronic cough"
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid item xs={12}>
          <RadioField
            name="symptomDyspnea"
            label="Shortness of breath (dyspnea)"
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid item xs={12}>
          <RadioField
            name="symptomNausea"
            label="Nausea or vomiting"
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid item xs={12}>
          <RadioField name="symptomHeadache" label="Headache" options={options} inFormGroup />
        </Grid>
        <Grid item xs={12}>
          <RadioField
            name="symptomAbdominalPain"
            label="Abdominal Pain"
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid item xs={12}>
          <RadioField
            name="symptomDiarrhea"
            label="Diarrhea (\u2265 loose/looser than normal stools/24hr period"
            options={options}
            inFormGroup
          />
        </Grid>
        <Grid item xs={12}>
          <RadioField name="symptomOther" label="Other Symptom" options={options} inFormGroup />
        </Grid>

        {values.symptomOther === 'yes' && (
          <Grid container alignItems="center" className={styles['margin-bottom']}>
            <Grid item xs={4}>
              <TextField name="symptomOtherSpecify" label="Other Symptom" />
            </Grid>
          </Grid>
        )}
      </FormGroup>
    </>
  );
}

export default SymptomsSection;
