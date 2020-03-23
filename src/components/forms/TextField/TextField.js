import React, { memo } from 'react';
import { Field } from 'formik';
import { TextField as MUITextField } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';
import FormControl from 'components/forms/FormControl';
import withMultipleSelections from '../MultipleSelections/MultipleSelections';

export function FormikTextField({ children, onChange, ...props }) {
  const textFieldProps = fieldToTextField(props);
  if (onChange) textFieldProps.onChange = onChange;

  return (
    <MUITextField {...textFieldProps} fullWidth variant="outlined">
      {children}
    </MUITextField>
  );
}

function StandardTextField(props) {
  return (
    <FormControl>
      <Field component={FormikTextField} {...props} />
    </FormControl>
  );
}

const MultipleTextField = memo(withMultipleSelections(TextField));

function TextField({ allowMultiple, ...props }) {
  return allowMultiple ? <MultipleTextField {...props} /> : <StandardTextField {...props} />;
}

export default TextField;
