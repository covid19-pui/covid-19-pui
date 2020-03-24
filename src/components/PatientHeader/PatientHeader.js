import React, { memo } from 'react';
import Paper from '@material-ui/core/Paper';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Field } from 'formik';
import { fieldToKeyboardDatePicker } from 'formik-material-ui-pickers';
import { TextField } from 'formik-material-ui';
import { useFormikContext } from 'formik';

import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme } from 'styles/theme';
import FormControl from 'components/forms/FormControl';
import useDOBAgeCallback from 'hooks/useDOBAgeCallback';
import useStyles from './styles';

export default function PatientHeader() {
  const { setFieldValue } = useFormikContext();

  return <PatientHeaderForm setFieldValue={setFieldValue} />;
}

const PatientHeaderForm = memo(function PatientHeaderForm({ setFieldValue }) {
  const styles = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper className={styles.root}>
        <div className={styles['patient-data']}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />

          <div className={styles['patient-form']}>
            <PatientFormTextField name="patientFirstName" label="Patient First Name" />
            <PatientFormTextField name="patientLastName" label="Patient Last Name" />

            <PatientFormDateField
              name="dateOfBirth"
              label="Date of Birth"
              setFieldValue={setFieldValue}
            />
          </div>
        </div>

        <div className={styles.footnote}>
          Patient identifier information is not transmitted to the CDC
        </div>
      </Paper>
    </ThemeProvider>
  );
});

function PatientFormTextField({ name, label }) {
  const styles = useStyles();

  return (
    <div className={styles['patient-form-field']}>
      <div className={styles.label}>{label}:</div>

      <FormControl className={styles.field}>
        <Field component={TextField} name={name} autoComplete="off" fullWidth color="secondary" />
      </FormControl>
    </div>
  );
}

function FormikKeyboardDatePicker({ onChange, children, ...props }) {
  const dateTimePickerProps = fieldToKeyboardDatePicker(props);
  if (onChange) dateTimePickerProps.onChange = onChange;

  return <KeyboardDatePicker {...dateTimePickerProps}>{children}</KeyboardDatePicker>;
}

function PatientFormDateField({ name, label, setFieldValue }) {
  const styles = useStyles();
  const calculateDOBAge = useDOBAgeCallback(setFieldValue);

  return (
    <div className={styles['patient-form-field']}>
      <div className={styles.label}>{label}:</div>

      <FormControl className={styles.field}>
        <Field
          component={FormikKeyboardDatePicker}
          name={name}
          autoOk
          fullWidth
          format="MM/dd/yyyy"
          placeholder="MM/DD/YYYY"
          color="secondary"
          autoComplete="off"
          onChange={calculateDOBAge}
        />
      </FormControl>
    </div>
  );
}
