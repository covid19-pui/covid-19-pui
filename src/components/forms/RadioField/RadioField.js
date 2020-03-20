import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useForm } from '../../FormProvider/FormProvider';

const useStyles = makeStyles(theme => ({
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  formLabel: {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.primary
  }
}));

function RadioField({ label }) {
  const styles = useStyles();
  const { 1: setForm } = useForm();
  const [selection, setSelection] = useState('');
  const handleChange = event => {
    setForm(prevState => {
      return {
        ...prevState,
        knownContact: event.target.value
      };
    });
    setSelection(event.target.value);
  };

  return (
    <div>
      <FormControl className={styles.formControl}>
        <FormLabel className={styles.formLabel}>{label}</FormLabel>
        <RadioGroup className={styles.radioGroup} value={selection} onChange={handleChange}>
          <FormControlLabel value={'true'} control={<Radio />} label="Yes" />
          <FormControlLabel value={'false'} control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioField;
