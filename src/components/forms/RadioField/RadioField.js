import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles({
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
  '@global': {
    label: {
      fontFamily: '"Avenir Next", "Segoe UI", "Roboto", "Helvetica Neue", sans-serif'
    }
  }
});

function RadioField({ label }) {
  const styles = useStyles();
  const handleChange = event => {
    //do nothing
  };
  return (
    <FormControl className={styles.formControl}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup className={styles.radioGroup} onChange={handleChange}>
        <FormControlLabel value={true} control={<Radio />} label="Yes" />
        <FormControlLabel value={false} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioField;
