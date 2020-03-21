import React, { useEffect } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import useStyles from './styles';
import { updateTOC, cleanUpTOC } from 'components/Navigation';
import FormSectionHeader from 'components/FormSectionHeader';
import IdentifiersSection from 'components/sections/IdentifiersSection';
import InterviewerSection from 'components/sections/InterviewerSection';
import BasicInformationSection from 'components/sections/BasicInformationSection';

const sections = [
  { id: 'identifiers', title: 'identifiers', section: <IdentifiersSection /> },
  { id: 'interviewer', title: 'interviewer', section: <InterviewerSection /> },
  { id: 'basicInformation', title: 'basic information', section: <BasicInformationSection /> },
  { id: 'demographics', title: 'demographics' },
  { id: 'patientCare', title: 'patient care' },
  { id: 'exposure', title: 'exposure' },
  { id: 'discovery', title: 'discovery' },
  { id: 'symptoms', title: 'symptoms' },
  { id: 'history', title: 'history' },
  { id: 'testing', title: 'testing' },
  { id: 'specimens', title: 'specimens' }
];

function FormContent() {
  const styles = useStyles();

  useEffect(() => {
    updateTOC();
    return cleanUpTOC;
  });

  const sectionContent = sections.map(s => (
    <div className={styles.root} key={s.id}>
      <FormSectionHeader id={s.id} key={s.id} title={s.title} />
      {s.section}
    </div>
  ));

  return <MuiPickersUtilsProvider utils={MomentUtils}>{sectionContent}</MuiPickersUtilsProvider>;
}

export default FormContent;
