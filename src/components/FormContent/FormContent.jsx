import React from 'react';
import FormSectionHeader from '../FormSectionHeader';

const sections = [
  { id: 'identifiers', title: 'IDENTIFIERS' },
  { id: 'interviewer', title: 'INTERVIEWER' },
  { id: 'basicInformation', title: 'BASIC INFORMATION' },
  { id: 'demographics', title: 'DEMOGRAPHICS' },
  { id: 'diseaseInformation', title: 'DISEASE INFORMATION' }
];

function FormContent() {
  return sections.map(s => <FormSectionHeader key={s.id} title={s.title} />);
}

export default FormContent;
