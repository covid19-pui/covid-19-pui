import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Field, useFormikContext } from 'formik';
import { TextField as MUITextField } from '@material-ui/core';
import { fieldToTextField } from 'formik-material-ui';

export function FormikAutocompleteTextField({ children, options, ...props }) {
  const { onChange, onBlur, value, disabled, name, ...rest } = fieldToTextField(props);
  const { setFieldValue } = useFormikContext();

  return (
    <Autocomplete
      disableClearable
      autoHighlight
      openOnFocus
      options={options}
      getOptionLabel={option => option.label}
      renderInput={params => (
        <MUITextField
          {...params}
          {...rest}
          name={name}
          autoComplete="off"
          variant="outlined"
          fullWidth
        />
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
