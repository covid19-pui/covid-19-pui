import React from 'react';
import { FieldArray, useFormikContext } from 'formik';
import Grid from '@material-ui/core/Grid';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

import { FormGroup, FormGroupDivider } from 'components/forms/FormGroup';
import RadioField from 'components/forms/RadioField';

const options = [
  { value: 'stateLabTested', label: 'State Lab Tested' },
  { value: 'sentToCDC', label: 'Sent to CDC' }
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

// function SpecimenGroup() {
//   return (
//     null
//   );
// }

function SpecimenGroups() {
  return (
    <FieldArray>
      <FormGroupDivider />
    </FieldArray>
  );
}
