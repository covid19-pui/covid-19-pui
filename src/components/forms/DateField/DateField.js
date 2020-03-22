import React from 'react';
import { Field } from 'formik';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { fieldToKeyboardDatePicker } from 'formik-material-ui-pickers';

import FormControl from 'components/forms/FormControl';

function FormikKeyboardDatePicker({ children, onChange, ...props }) {
  const datePickerProps = fieldToKeyboardDatePicker(props);
  if (onChange) datePickerProps.onChange = onChange;

  return (
    <KeyboardDatePicker
      {...datePickerProps}
      autoOk
      fullWidth
      variant="inline"
      inputVariant="outlined"
      format="MM/dd/yyyy"
      placeholder="MM/DD/YYYY"
      InputAdornmentProps={{ position: 'end' }}
    >
      {children}
    </KeyboardDatePicker>
  );
}

function DateField(props) {
  return (
    <FormControl>
      <Field component={FormikKeyboardDatePicker} {...props} />
    </FormControl>
  );
}

export default DateField;
