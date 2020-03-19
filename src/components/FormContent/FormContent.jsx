import React, { useEffect } from 'react';
import { updateTOC, cleanUpTOC } from '../Navigation/Navigation';
import FormSectionHeader from '../FormSectionHeader';

const sections = [
  { id: 'identifiers', title: 'identifiers' },
  { id: 'interviewer', title: 'interviewer' },
  { id: 'basicInformation', title: 'basic information' },
  { id: 'demographics', title: 'demographics' },
  { id: 'diseaseInformation', title: 'disease information' }
];

function FormContent() {
  useEffect(() => {
    updateTOC();
    return cleanUpTOC;
  });

  return sections.map(s => <FormSectionHeader id={s.id} key={s.id} title={s.title} />);
}

export default FormContent;
