import React, { useMemo } from 'react';
import { MenuItem } from '@material-ui/core';
import TextField from 'components/forms/TextField';

function SelectBox({ options, ...props }) {
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

export default SelectBox;
