import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { useForm } from 'components/FormProvider';

function SelectBox({ name, label, defaultValue, options }) {
  const { setForm } = useForm();
  const [selectedItem, setItem] = useState(defaultValue);

  const handleChange = event => {
    const { value } = event.target;

    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
    setItem(value);
  };

  return (
    <FormControl fullWidth>
      <TextField
        name={name}
        select
        label={label}
        value={selectedItem || ''}
        onChange={handleChange}
        variant="outlined"
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
}

export default SelectBox;
