import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FormGroup, FormGroupDivider } from 'components/forms/FormGroup';
import { useFormikContext } from 'formik';

import RadioField from 'components/forms/RadioField';
import TextField from 'components/forms/TextField';
import useStyles from './styles';
const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
  { value: 'unknown', label: 'Unknown' }
];

function HistorySection() {
  const styles = useStyles();
  const { values } = useFormikContext();

  return (
    <>
      <FormGroup options={options}>
        {values.sex !== 'male' && (
          <Grid item xs={12}>
            <RadioField
              name="pregnant"
              label="Is the case-patient pregnant?"
              options={options}
              inFormGroup
            />
          </Grid>
        )}
        <FormGroupDivider />
        <Grid item xs={12}>
          <RadioField
            name="currentSmoker"
            label="Is the case-patient a current smoker?"
            options={options}
            inFormGroup
          />
        </Grid>
        <FormGroupDivider />
        <Grid item xs={12}>
          <RadioField
            name="formerSmoker"
            label="Is the case-patient a former smoker?"
            options={options}
            inFormGroup
          />
        </Grid>

        <FormGroupDivider />
        <Grid item xs={12}>
          <RadioField
            name="preExistingConditions"
            label="Pre-existing medical conditions?"
            options={options}
            inFormGroup
          />
        </Grid>
      </FormGroup>

      {values.preExistingConditions === 'yes' && (
        <FormGroup headerText="During this illness, did the patient have" options={options}>
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
              label="Chronic Renal disease)"
              options={options}
              inFormGroup
            />
          </Grid>
          <FormGroupDivider />
          <Grid item xs={12}>
            <RadioField
              name="chroniucLiverDisease"
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
                <TextField name="neurologicDiseaseSpecify" label="Specify" />
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
                <TextField name="otherDiseaseSpecify" label="Specify" />
              </Grid>
            </Grid>
          )}
          <FormGroupDivider />
        </FormGroup>
      )}
    </>
  );
}

export default HistorySection;
