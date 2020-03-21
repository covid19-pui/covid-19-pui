import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { KeyboardDatePicker } from '@material-ui/pickers';

import useStyles from './styles';
import { useForm } from 'components/FormProvider';

function DateField({ name, label, defaultValue }) {
  const styles = useStyles();
  const { setForm } = useForm();
  const [selectedDate, setDate] = useState(defaultValue);

  const handleDateChange = date => {
    setForm(prevState => {
      return {
        ...prevState,
        [name]: date.format('MM/DD/YYYY')
      };
    });
    setDate(date);
  };

  return (
    <FormControl className={styles.formControl}>
      <KeyboardDatePicker
        autoOk
        fullWidth
        variant="inline"
        inputVariant="outlined"
        label={label}
        format="MM/DD/YYYY"
        value={selectedDate || null}
        InputAdornmentProps={{ position: 'end' }}
        onChange={date => handleDateChange(date)}
      />
    </FormControl>
  );
}

export default DateField;
