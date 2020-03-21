import React from 'react';
import { TextField as MUITextField, FormControl } from '@material-ui/core';
import InputMask from 'react-input-mask';

import useStyles from './styles';
import { useForm } from '../../FormProvider/FormProvider';

function Field({ type, onChange, ...props }) {
  switch (type) {
    case 'tel':
      return (
        <InputMask mask="(999) 999-9999" onChange={onChange}>
          {() => <MUITextField fullWidth variant="outlined" type="tel" {...props} />}
        </InputMask>
      );

    default:
      return (
        <MUITextField fullWidth variant="outlined" onChange={onChange} type={type} {...props} />
      );
  }
}

function TextField({ name, ...props }) {
  const styles = useStyles();
  const { setForm } = useForm();

  const handleChange = event => {
    const { value } = event.target;

    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  return (
    <FormControl className={styles.formControl}>
      <Field {...props} onChange={handleChange} />
    </FormControl>
  );
}

export default TextField;
