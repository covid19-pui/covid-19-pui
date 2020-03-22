import React, { useState } from 'react';
import { TextField as MUITextField, FormControl } from '@material-ui/core';
import InputMask from 'react-input-mask';

import { useForm } from 'components/FormProvider';

import useStyles from './styles';

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

function TextField({ name, defaultValue, ...props }) {
  const styles = useStyles();
  const { setForm } = useForm();
  const [textValue, setTextValue] = useState(defaultValue);

  const handleChange = event => {
    const { value } = event.target;

    setForm(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
    setTextValue(value);
  };

  return (
    <FormControl className={styles.formControl}>
      <Field {...props} value={textValue} onChange={handleChange} />
    </FormControl>
  );
}

export default TextField;
