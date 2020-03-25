import React, { memo } from 'react';
import { useFormikContext, FieldArray } from 'formik';
import { Button, IconButton, Grid } from '@material-ui/core';
import { FormGroup, FormGroupDivider } from 'components/forms/FormGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { RadioField, SelectBox, TextField } from 'components/forms';
import { createTest } from 'components/FormProvider';
import useObjectSlice from 'hooks/useObjectSlice';
import useStyles from './styles';

const formGroupOptions = [
  { value: 'pos', label: 'Pos' },
  { value: 'neg', label: 'Neg' },
  { value: 'pending', label: 'Pending' },
  { value: 'notDone', label: 'Not Done' }
];

const fluTestOptions = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' }
];

const REQUIRED_VALUES = ['influenzaRapidAg', 'influenzaPCR'];

const DefaultFormValues = memo(function DefaultFormValues({ values }) {
  const styles = useStyles();

  return (
    <FormGroup options={formGroupOptions} headerText="Test">
      <Grid item xs={12}>
        <RadioField
          name="influenzaRapidAg"
          label="Influenza rapid Ag"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      {values.influenzaRapidAg !== '' && values.influenzaRapidAg !== 'notDone' && (
        <Grid container alignItems="center">
          <Grid item xs={4} className={styles['margin-bottom']}>
            <SelectBox name="influenzaRapidAgType" label="Type" options={fluTestOptions} />
          </Grid>
        </Grid>
      )}

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="influenzaPCR"
          label="Influenza PCR"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      {values.influenzaPCR !== '' && values.influenzaPCR !== 'notDone' && (
        <Grid container alignItems="center">
          <Grid item xs={4} className={styles['margin-bottom']}>
            <SelectBox name="influenzaPCRType" label="Type" options={fluTestOptions} />
          </Grid>
        </Grid>
      )}

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField name="rsv" label="RSV" options={formGroupOptions} inFormGroup numOptions={4} />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="metapneumovirus"
          label="H. Metapneumovirus"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="parainfluenza"
          label="Parainfluenza (1-4)"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="adenovirus"
          label="Adenovirus"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="rhinovirus"
          label="Rhinovirus/enterovirus"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="coronavirus"
          label="Coronavirus (OC43, 229E, HKU1, NL63)"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="mpneumoniae"
          label="M. pneumoniae"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      <FormGroupDivider />

      <Grid item xs={12}>
        <RadioField
          name="cpneumoniae"
          label="C. Pneumonia"
          options={formGroupOptions}
          inFormGroup
          numOptions={4}
        />
      </Grid>

      <FormGroupDivider />
    </FormGroup>
  );
});

function FieldArrayItems({
  remove,
  push,
  form: {
    values: { additionalTests }
  }
}) {
  const styles = useStyles();

  return (
    <>
      {additionalTests && additionalTests.length > 0 ? (
        additionalTests.map((test, index) => (
          <Grid item xs={12} key={test._id} alignItems="center">
            <Grid container direction="row" className={styles.row}>
              <Grid item xs={4}>
                <TextField
                  name={`additionalTests.${index}.testName`}
                  label="Specify Test"
                  type="text"
                  autoComplete="off"
                />
              </Grid>

              <Grid item xs={1} className={styles.buttons}>
                <IconButton
                  type="button"
                  onClick={() => remove(index)}
                  size="small"
                  color="primary"
                >
                  <FontAwesomeIcon icon={faMinusSquare} />
                </IconButton>

                {index + 1 === additionalTests.length && (
                  <IconButton
                    type="button"
                    onClick={() => push(createTest())}
                    size="small"
                    color="secondary"
                  >
                    <FontAwesomeIcon icon={faPlusSquare} />
                  </IconButton>
                )}
              </Grid>

              <Grid item xs={7}>
                <RadioField
                  name={`additionalTests.${index}.result`}
                  options={formGroupOptions}
                  inFormGroup
                  numOptions={4}
                />
              </Grid>
            </Grid>

            <FormGroupDivider />
          </Grid>
        ))
      ) : (
        <Button
          type="button"
          color="secondary"
          onClick={() => push(createTest())}
          className={styles['margin-top']}
        >
          <FontAwesomeIcon icon={faPlusSquare} className={styles['button-icon']} /> Add Test
        </Button>
      )}
    </>
  );
}

function TestingGroups() {
  const styles = useStyles();
  const { values } = useFormikContext();
  const formValues = useObjectSlice(values, REQUIRED_VALUES);

  if (values.respiratoryTesting !== 'yes') return null;

  return (
    <Grid container className={styles.root}>
      <DefaultFormValues values={formValues} />
      <FieldArray name="additionalTests" component={FieldArrayItems} />
    </Grid>
  );
}

export default TestingGroups;
