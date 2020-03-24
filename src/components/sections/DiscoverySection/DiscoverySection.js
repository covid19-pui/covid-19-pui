import React, { memo } from 'react';
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
  const {
    values: { discoveryProcess },
    setFieldValue,
    handleChange
  } = useFormikContext();

  return (
    <DiscoverySectionForm
      discoveryProcess={discoveryProcess}
      setFieldValue={setFieldValue}
      handleChange={handleChange}
    />
  );
}

const DiscoverySectionForm = memo(function DiscoverySectionForm({
  discoveryProcess,
  setFieldValue,
  handleChange
}) {
  const styles = useStyles();

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

      {discoveryProcess === 'epiXNotification' && (
        <Grid item xs={6}>
          <TextField name="dgmqid" label="DGMQID" autoComplete="new-password" />
        </Grid>
      )}

      {discoveryProcess === 'other' && (
        <Grid item xs={6}>
          <TextField
            name="otherDiscoveryProcess"
            label="Other Discovery Process"
            autoComplete="new-password"
          />
        </Grid>
      )}
    </Grid>
  );
});

export default DiscoverySection;
