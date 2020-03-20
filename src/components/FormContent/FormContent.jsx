import React, { useEffect } from 'react';

import useStyles from './styles';
import { updateTOC, cleanUpTOC } from '../Navigation/Navigation';
import FormSectionHeader from '../FormSectionHeader';

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
    <div className={styles.root} key={s.id}>
      <FormSectionHeader id={s.id} key={s.id} title={s.title} />
    </div>
  ));
}

export default FormContent;
