import React, { useEffect } from 'react';
import { updateTOC, cleanUpTOC } from '../Navigation/Navigation';
import FormSectionHeader from '../FormSectionHeader';

const sections = [
  { id: 'identifiers', title: 'IDENTIFIERS' },
  { id: 'interviewer', title: 'INTERVIEWER' },
  { id: 'basicInformation', title: 'BASIC INFORMATION' },
  { id: 'demographics', title: 'DEMOGRAPHICS' },
  { id: 'diseaseInformation', title: 'DISEASE INFORMATION' }
];

function FormContent() {
  useEffect(() => {
    updateTOC();
    return cleanUpTOC;
  });

  return sections.map(s => <FormSectionHeader id={s.id} key={s.id} title={s.title} />);
}

export default FormContent;
