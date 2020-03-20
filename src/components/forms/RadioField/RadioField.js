import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useForm } from 'components/FormProvider';

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
    fontFamily: theme.typography.primary.fontFamily,
    color: theme.palette.text.primary
  }
}));

function RadioField({ label, formKey, options }) {
  const styles = useStyles();
  const { 1: setForm } = useForm();
  const [selection, setSelection] = useState('');
  const handleChange = event => {
    setForm(prevState => {
      return {
        ...prevState,
        [formKey]: event.target.value
      };
    });
    setSelection(event.target.value);
  };

  return (
    <div>
      <FormControl className={styles.formControl}>
        <FormLabel className={styles.formLabel}>{label}</FormLabel>
        <RadioGroup className={styles.radioGroup} value={selection} onChange={handleChange}>
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioField;
