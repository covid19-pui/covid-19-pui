import React from 'react';
import { useFormikContext, FieldArray } from 'formik';
import { Button, Grid } from '@material-ui/core';

import { FormGroup, FormGroupDivider } from 'components/forms/FormGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { RadioField, SelectBox, TextField } from 'components/forms';
import { createTest } from 'components/FormProvider';
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

function DefaultFormValues() {
  const styles = useStyles();
  const { values } = useFormikContext();

  return (
    <Grid container className={styles.root}>
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
          <RadioField
            name="rsv"
            label="RSV"
            options={formGroupOptions}
            inFormGroup
            numOptions={4}
          />
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
            label="Coronavirus (OC43, 229E, HKU1, NL63"
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
      </FormGroup>
    </Grid>
  );
}

function FieldArrayItems({
  remove,
  push,
  form: {
    values: { additionalTests }
  }
}) {
  return (
    <Grid container>
      {additionalTests && additionalTests.length > 0 ? (
        additionalTests.map((test, index) => (
          //<span key={test._id}>{test._id}</span>
          <TextField
            label="Specify Test"
            type="text"
            autoComplete="off"
            name={`test.${index}.name`}
          />
        ))
      ) : (
        <Button type="button" color="secondary">
          <FontAwesomeIcon icon={faPlusSquare} onClick={() => push(createTest())} /> Add Test
        </Button>
      )}
    </Grid>
  );
}

function TestingGroups() {
  const { values } = useFormikContext();

  return (
    <>
      {values.respiratoryTesting === 'yes' && (
        <>
          <DefaultFormValues />
          <FieldArray name="additionalTests" component={FieldArrayItems} />
        </>
      )}
    </>
  );
}

export default TestingGroups;
