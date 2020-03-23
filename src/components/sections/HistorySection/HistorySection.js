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
    <FormGroup options={options}>
      <Grid item xs={12}>
        <RadioField
          name="preExistingConditions"
          label="Pre-existing medical conditions?"
          options={options}
        />
      </Grid>
      <FormGroupDivider />
      {values.preExistingConditions !== 'no' && (
        <>
          <Grid item xs={12}>
            <RadioField
              name="chronicLungDisease"
              label="Chronic Lung Disease (asthma/emphysema/COPD)"
              options={options}
            />
          </Grid>
          <FormGroupDivider />
          <Grid item xs={12}>
            <RadioField name="diabetes" label="Diabetes Mellitus" options={options} />
          </Grid>
          <FormGroupDivider />
          <Grid item xs={12}>
            <RadioField
              name="cardiovascularDisease"
              label="Cardiovascular disease"
              options={options}
            />
          </Grid>
          <FormGroupDivider />
          <Grid item xs={12}>
            <RadioField
              name="chronicRenalDisease"
              label="Chronic Renal disease)"
              options={options}
            />
          </Grid>
          <FormGroupDivider />
          <Grid item xs={12}>
            <RadioField
              name="chroniucLiverDisease"
              label="Chronic Liver disease"
              options={options}
            />
          </Grid>
          <FormGroupDivider />
          <Grid item xs={12}>
            <RadioField
              name="immunocomprimised"
              label="Immunocompromised Condition"
              options={options}
            />
          </Grid>
          <FormGroupDivider />
          <Grid item xs={12}>
            <RadioField
              name="neurologicDisease"
              label="Neurologic/neurodevelopmental/intellectual disability"
              options={options}
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
        </>
      )}

      <Grid container spacing={3}>
        {values.sex !== 'male' && (
          <Grid item xs={12}>
            <RadioField name="pregnant" label="Is the case-patient pregnant?" options={options} />
          </Grid>
        )}
        <FormGroupDivider />
        <Grid item xs={12}>
          <RadioField
            name="currentSmoker"
            label="Is the case-patient a current smoker?"
            options={options}
          />
        </Grid>
        <FormGroupDivider />
        <Grid item xs={12}>
          <RadioField
            name="formerSmoker"
            label="Is the case-patient a former smoker?"
            options={options}
          />
        </Grid>
      </Grid>
    </FormGroup>
  );
}

export default HistorySection;
