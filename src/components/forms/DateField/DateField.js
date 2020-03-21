import React, { useState } from 'react';
import moment from 'moment';
import FormControl from '@material-ui/core/FormControl';
import { KeyboardDatePicker } from '@material-ui/pickers';

import useStyles from './styles';
import { useForm } from '../../FormProvider/FormProvider';

function DateField({ formKey, label }) {
  const styles = useStyles();
  const { setForm } = useForm();
  const [selectedDate, setDate] = useState(moment());

  const handleDateChange = date => {
    setForm(prevState => {
      return {
        ...prevState,
        [formKey]: date.format('MM/DD/YYYY')
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
        value={selectedDate}
        InputAdornmentProps={{ position: 'end' }}
        onChange={date => handleDateChange(date)}
      />
    </FormControl>
  );
}

export default DateField;
