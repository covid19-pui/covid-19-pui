import React, { memo } from 'react';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';

import { RadioField, TextField, FormGroup, FormGroupDivider } from 'components/forms';
import useObjectSlice from 'hooks/useObjectSlice';
import useStyles from './styles';

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unknown', label: 'Unknown' }
];

const REQUIRED_VALUES = [
  'sex',
  'preExistingConditions',
  'neurologicDisease',
  'otherChronicDisease'
];

function HistorySection() {
  const { values } = useFormikContext();
  const formValues = useObjectSlice(values, REQUIRED_VALUES);

  return <HistorySectionForm values={formValues} />;
}

const HistorySectionForm = memo(function HistorySectionForm({ values }) {
  const styles = useStyles();

  return (
    <>
      <FormGroup options={options}>
        {values.sex !== 'male' && (
          <Grid item xs={12}>
            <RadioField
              name="pregnant"
              label={
                <>
                  Is the patient currently <strong>pregnant</strong>?
                </>
              }
              options={options}
              inFormGroup
            />
          </Grid>
        )}

        <FormGroupDivider />

        <Grid item xs={12}>
          <RadioField
            name="currentSmoker"
            label={
              <>
                Is the patient a <strong>current smoker</strong>?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>

        <FormGroupDivider />

        <Grid item xs={12}>
          <RadioField
            name="formerSmoker"
            label={
              <>
                Is the case-patient a <strong>former smoker</strong>?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>

        <FormGroupDivider />

        <Grid item xs={12} className={styles['margin-bottom']}>
          <RadioField
            name="preExistingConditions"
            label={
              <>
                Does the patient have <strong>pre-existing medical conditions</strong>?
              </>
            }
            options={options}
            inFormGroup
          />
        </Grid>
      </FormGroup>

      {values.preExistingConditions === 'yes' && (
        <FormGroup headerText="During this illness, did the patient have..." options={options}>
          <Grid item xs={12}>
            <RadioField
              name="chronicLungDisease"
              label="Chronic Lung Disease (asthma/emphysema/COPD)"
              options={options}
              inFormGroup
            />
          </Grid>

          <FormGroupDivider />

          <Grid item xs={12}>
            <RadioField name="diabetes" label="Diabetes Mellitus" options={options} inFormGroup />
          </Grid>

          <FormGroupDivider />

          <Grid item xs={12}>
            <RadioField
              name="cardiovascularDisease"
              label="Cardiovascular disease"
              options={options}
              inFormGroup
            />
          </Grid>

          <FormGroupDivider />

          <Grid item xs={12}>
            <RadioField
              name="chronicRenalDisease"
              label="Chronic Renal disease"
              options={options}
              inFormGroup
            />
          </Grid>

          <FormGroupDivider />

          <Grid item xs={12}>
            <RadioField
              name="chronicLiverDisease"
              label="Chronic Liver disease"
              options={options}
              inFormGroup
            />
          </Grid>

          <FormGroupDivider />

          <Grid item xs={12}>
            <RadioField
              name="immunocomprimised"
              label="Immunocompromised Condition"
              options={options}
              inFormGroup
            />
          </Grid>

          <FormGroupDivider />

          <Grid item xs={12}>
            <RadioField
              name="neurologicDisease"
              label="Neurologic/neurodevelopmental/intellectual disability"
              options={options}
              inFormGroup
            />
          </Grid>

          {values.neurologicDisease === 'yes' && (
            <Grid container alignItems="center" className={styles['margin-bottom']}>
              <Grid item xs={4}>
                <TextField name="neurologicDiseaseSpecify" label="Specify Disability" />
              </Grid>
            </Grid>
          )}

          <FormGroupDivider />

          <Grid item xs={12}>
            <RadioField
              name="otherChronicDisease"
              label="Other chronic disease"
              options={options}
              inFormGroup
            />
          </Grid>

          {values.otherChronicDisease === 'yes' && (
            <Grid container alignItems="center" className={styles['margin-bottom']}>
              <Grid item xs={4}>
                <TextField name="otherDiseaseSpecify" label="Specify Chronic Disease" />
              </Grid>
            </Grid>
          )}
        </FormGroup>
      )}
    </>
  );
});

export default HistorySection;
