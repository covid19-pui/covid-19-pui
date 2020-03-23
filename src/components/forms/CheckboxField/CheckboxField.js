import React from 'react';
import { Field } from 'formik';
import { fieldToCheckbox } from 'formik-material-ui';
import { Checkbox, FormControlLabel } from '@material-ui/core';

import FormControl from 'components/forms/FormControl';
import useStyles from './styles';

function FormikCheckboxWithLabel({ Label, onChange, ...props }) {
  const checkboxProps = fieldToCheckbox(props);
  if (onChange) checkboxProps.onChange = onChange;

  return <FormControlLabel control={<Checkbox {...checkboxProps} />} {...Label} />;
}

function CheckboxField({ name, label, ...props }) {
  const styles = useStyles();

  return (
    <FormControl className={styles.root}>
      <Field
        className={styles.checkbox}
        component={FormikCheckboxWithLabel}
        name={name}
        Label={{ label, classes: { label: styles.label } }}
        type="checkbox"
        {...props}
      />
    </FormControl>
  );
}

export default CheckboxField;
