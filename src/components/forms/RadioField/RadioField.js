import React from 'react';
import { Field } from 'formik';
import { RadioGroup } from 'formik-material-ui';
import { Radio, FormControlLabel, FormLabel } from '@material-ui/core';
import FormControl from 'components/forms/FormControl';

import useStyles from './styles';

function RadioField({ name, label, options, ...props }) {
  const styles = useStyles();

  return (
    <FormControl>
      <FormLabel className={styles.formLabel}>{label}</FormLabel>
      <Field component={RadioGroup} name={name} className={styles.radioGroup}>
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </Field>
    </FormControl>
  );
}

export default RadioField;
