import React, { memo, useMemo } from 'react';
import { MenuItem } from '@material-ui/core';
import TextField from 'components/forms/TextField';
import withMultipleSelections from '../MultipleSelections/MultipleSelections';

function StandardSelectBox({ options, ...props }) {
  const menuOptions = useMemo(
    () =>
      options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )),
    [options]
  );

  return (
    <TextField {...props} select>
      {menuOptions}
    </TextField>
  );
}

const MultipleSelectBox = memo(withMultipleSelections(SelectBox));

function SelectBox({ allowMultiple, ...props }) {
  return allowMultiple ? <MultipleSelectBox {...props} /> : <StandardSelectBox {...props} />;
}

export default SelectBox;
