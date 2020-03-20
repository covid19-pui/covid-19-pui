import React, { useEffect } from 'react';

import useStyles from './styles';
import { updateTOC, cleanUpTOC } from 'components/Navigation';
import FormSectionHeader from 'components/FormSectionHeader';
import IdentifiersSection from 'components/sections/IdentifiersSection';

const sections = [
  { id: 'identifiers', title: 'identifiers', section: <IdentifiersSection /> },
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
      {s.section}
    </div>
  ));
}

export default FormContent;
