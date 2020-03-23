import React from 'react';
import { unstable_batchedUpdates as batch } from 'react-dom';
import Grid from '@material-ui/core/Grid';
import { useFormikContext } from 'formik';

import { SelectBox, TextField } from 'components/forms';
import useStyles from './styles';

const discoveryProcessOptions = [
  { value: 'clinicalEvaluation', label: 'Clinical evaluation leading to PUI determination' },
  { value: 'contactTracing', label: 'Contact tracing of case patient' },
  { value: 'routineSurveillance', label: 'Routine surveillance' },
  { value: 'epiXNotification', label: 'EpiX notification of travelers' },
  { value: 'unknown', label: 'Unknown' },
  { value: 'other', label: 'Other' }
];

function DiscoverySection() {
  const styles = useStyles();
  const { values, setFieldValue, handleChange } = useFormikContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={styles['simple-text']}>
        Under what process was the PUI or case first <strong>identified</strong>?
      </Grid>

      <Grid item xs={9}>
        <SelectBox
          name="discoveryProcess"
          label="Discovery Process"
          options={discoveryProcessOptions}
          onChange={e => {
            batch(() => {
              handleChange(e);
              setFieldValue('dgmqid', '');
              setFieldValue('otherDiscoveryProcess', '');
            });
          }}
        />
      </Grid>

      {values.discoveryProcess === 'epiXNotification' && (
        <Grid item xs={6}>
          <TextField name="dgmqid" label="DGMQID" autoComplete="off" />
        </Grid>
      )}

      {values.discoveryProcess === 'other' && (
        <Grid item xs={6}>
          <TextField
            name="otherDiscoveryProcess"
            label="Other Discovery Process"
            autoComplete="off"
          />
        </Grid>
      )}
    </Grid>
  );
}

export default DiscoverySection;
