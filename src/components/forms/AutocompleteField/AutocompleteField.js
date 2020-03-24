import React, { useEffect } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Field, useFormikContext } from 'formik';
import { TextField as MUITextField } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';

export function FormikAutocompleteTextField({ children, options, ...props }) {
  const { onChange, onBlur, value, disabled, name, ...rest } = fieldToTextField(props);
  const { setFieldValue } = useFormikContext();

  // The Autocomplete component appears to override the "autocomplete" attribute, setting it to "off"
  // no matter how you set the autoComplete property in the component. Chrome, however, ignores
  // autocomplete: "off" and only really turns off autofill if you set it to autocomplete: "new-password".
  // This code uses an effect to directly change the autocomplete attribute after the component has
  // updated.
  const myRef = React.createRef();
  useEffect(() => {
    const input = myRef.current && myRef.current.getElementsByTagName('input')[0];
    input.autocomplete = 'new-password';
  });

  return (
    <Autocomplete
      disableClearable
      autoHighlight
      openOnFocus
      options={options}
      getOptionLabel={option => (typeof option === 'string' ? option : option.label)}
      renderInput={params => (
        <MUITextField {...params} {...rest} ref={myRef} name={name} variant="outlined" fullWidth />
      )}
      onChange={(event, value) => {
        setFieldValue(name, value);
      }}
      onBlur={onBlur}
      value={value}
      disabled={disabled}
      id={name}
    >
      {children}
    </Autocomplete>
  );
}

function AutocompleteField(props) {
  return <Field component={FormikAutocompleteTextField} {...props} />;
}

export default AutocompleteField;
