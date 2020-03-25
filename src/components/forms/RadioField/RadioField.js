import React from 'react';
import clsx from 'clsx';
import { Field } from 'formik';
import { fieldToRadioGroup } from 'formik-material-ui';
import { Radio, FormControlLabel, FormLabel, RadioGroup } from '@material-ui/core';

import FormControl from 'components/forms/FormControl';
import useStyles from './styles';

function FormikRadioGroup({ onChange, ...props }) {
  const radioProps = fieldToRadioGroup(props);
  if (onChange) radioProps.onChange = onChange;

  return <RadioGroup {...radioProps} />;
}

function RadioField({ name, label, options, inFormGroup = false, numOptions = 3, ...props }) {
  const styles = useStyles();

  return (
    <FormControl>
      <FormLabel className={styles['form-label']}>{label}</FormLabel>
      <Field
        component={FormikRadioGroup}
        name={name}
        className={clsx(
          styles['radio-group'],
          inFormGroup && styles[`in-form-group-${numOptions}`]
        )}
        {...props}
      >
        {options.map(option => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={inFormGroup ? '' : option.label}
            className={clsx(inFormGroup && styles.grouped)}
          />
        ))}
      </Field>
    </FormControl>
  );
}

export default RadioField;
