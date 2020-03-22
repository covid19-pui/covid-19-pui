import React from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Formik, Form } from 'formik';
import DateFnsUtils from '@date-io/date-fns';
import download from 'downloadjs';

import initialValues from './initialValues';

function FormProvider({ children }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          download(JSON.stringify(values, null, 2), 'covid-19-pui-form.json', 'application/json');
        }}
      >
        <Form>{children}</Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );
}

export default FormProvider;
