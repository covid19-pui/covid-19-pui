import React from 'react';
import { Field } from 'formik';
import { TextField as MUITextField } from '@material-ui/core';
import InputMask from 'react-input-mask';
import { fieldToTextField } from 'formik-material-ui';
import FormControl from 'components/forms/FormControl';

export function FormikTelField({ children, ...props }) {
  const { onChange, onBlur, value, disabled, ...rest } = fieldToTextField(props);

  return (
    <InputMask
      mask="(999) 999-9999"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
    >
      {() => (
        <MUITextField {...rest} fullWidth autoComplete="new-password" variant="outlined" type="tel">
          {children}
        </MUITextField>
      )}
    </InputMask>
  );
}

function TelField(props) {
  return (
    <FormControl>
      <Field component={FormikTelField} {...props} />
    </FormControl>
  );
}

export default TelField;
