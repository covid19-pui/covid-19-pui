import React from 'react';
import { FieldArray, useFormikContext } from 'formik';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import {
  FormGroup,
  FormGroupDivider,
  RadioField,
  SelectBox,
  DateField,
  TextField
} from 'components/forms';
import useStyles from './styles';

const options = [
  { value: 'stateLabTested', label: 'State Lab Tested' },
  { value: 'sentToCDC', label: 'Sent to CDC' }
];

const typeOptions = [
  { value: 'npSwab', label: 'NP Swab' },
  { value: 'opSwab', label: 'OP Swab' },
  { value: 'sputnum', label: 'Sputnum' },
  { value: 'other', label: 'Other' }
];

export default function SpecimensSection() {
  const { values } = useFormikContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <RadioField
          name="specimenCollected"
          label={
            <>
              Has a <strong>specimen</strong> been collected from the patient?
            </>
          }
          options={[
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' }
          ]}
        />
      </Grid>

      {values.specimenCollected === 'yes' && (
        <FormGroup options={options} headerText="Specimen" textRows={2}>
          <SpecimenGroups />
        </FormGroup>
      )}
    </Grid>
  );
}

function SpecimenGroup({ name }) {
  const styles = useStyles();

  return (
    <Grid container spacing={2} alignItems="center" className={styles['margin-bottom']}>
      <Grid item xs={4}>
        <SelectBox name={`${name}.specimenType`} label="Type" options={typeOptions} />
      </Grid>

      <Grid item xs={4}>
        <DateField name={`${name}.specimenDateCollected`} label="Date Collected" />
      </Grid>

      <Grid item xs={4} />

      <Grid item xs={4}>
        <TextField name={`${name}.specimenID`} label="Specimen ID" type="text" autoComplete="off" />
      </Grid>

      <Grid item xs={4}>
        <TextField
          name={`${name}.specimenStateLabResult`}
          label="State Lab Result"
          type="text"
          autoComplete="off"
        />
      </Grid>

      <Grid item xs={4} />

      <Grid item xs={4} />

      <Grid item xs={4}>
        <TextField
          name={`${name}.specimenCDCLabResult`}
          label="CDC Lab Result"
          type="text"
          autoComplete="off"
        />
      </Grid>

      <FormGroupDivider />
    </Grid>
  );
}

function SpecimenGroups() {
  // const styles = useStyles();
  const { values } = useFormikContext();

  return (
    <FieldArray
      name="specimens"
      render={({ remove, insert, push }) => (
        <div>
          {values.specimens && values.specimens.length > 0 ? (
            values.specimens.map((specimen, index) => (
              <div key={index}>
                <SpecimenGroup name={`specimens.${index}`} />
                <button
                  type="button"
                  onClick={() => remove(index)} // remove a specimen from the list
                >
                  <FontAwesomeIcon name={faMinusSquare} />
                </button>
                <button
                  type="button"
                  onClick={() => insert(index, '')} // insert an empty string at a position
                >
                  <FontAwesomeIcon name={faMinusSquare} />
                </button>
              </div>
            ))
          ) : (
            <button type="button" onClick={() => push('')}>
              {/* show this when user has removed all specimens from the list */}
              Add Specimen
            </button>
          )}
        </div>
      )}
    ></FieldArray>
  );
}
