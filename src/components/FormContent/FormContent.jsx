import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import { updateTOC, cleanUpTOC } from '../Navigation/Navigation';
import FormSectionHeader from '../FormSectionHeader';

const useStyles = makeStyles(
  {
    root: {
      margin: '2em'
    }
  },
  { name: 'FormContent' }
);

const sections = [
  { id: 'identifiers', title: 'identifiers' },
  { id: 'interviewer', title: 'interviewer' },
  { id: 'basicInformation', title: 'basic information' },
  { id: 'demographics', title: 'demographics' },
  { id: 'patientCare', title: 'patient care' },
  { id: 'symptoms', title: 'symptoms' },
  { id: 'exposure', title: 'exposure' }
];

function FormContent() {
  const styles = useStyles();

  useEffect(() => {
    updateTOC();
    return cleanUpTOC;
  });

  return sections.map(s => (
    <div className={styles.root}>
      <FormSectionHeader id={s.id} key={s.id} title={s.title} />
    </div>
  ));
}

export default FormContent;
