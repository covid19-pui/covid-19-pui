import React, { useMemo } from 'react';
import { Button, Grid } from '@material-ui/core';

import FormSectionHeader from 'components/FormSectionHeader';
import IdentifiersSection from 'components/sections/IdentifiersSection';
import InterviewerSection from 'components/sections/InterviewerSection';
import BasicInformationSection from 'components/sections/BasicInformationSection';
import DemographicsSection from 'components/sections/DemographicsSection';
import PatientCareSection from 'components/sections/PatientCareSection';
import ExposureSection from 'components/sections/ExposureSection';
import DiscoverySection from 'components/sections/DiscoverySection';
import SymptomsSection from 'components/sections/SymptomsSection';
import HistorySection from 'components/sections/HistorySection';
import SpecimensSection from 'components/sections/SpecimensSection';

import useTOC from 'hooks/useTOC';
import useStyles from './styles';

const sections = [
  { id: 'identifiers', title: 'identifiers', section: <IdentifiersSection /> },
  { id: 'interviewer', title: 'interviewer', section: <InterviewerSection /> },
  { id: 'basicInformation', title: 'basic information', section: <BasicInformationSection /> },
  { id: 'demographics', title: 'demographics', section: <DemographicsSection /> },
  { id: 'patientCare', title: 'patient care', section: <PatientCareSection /> },
  { id: 'exposure', title: 'exposure', section: <ExposureSection /> },
  { id: 'discovery', title: 'discovery', section: <DiscoverySection /> },
  { id: 'symptoms', title: 'symptoms', section: <SymptomsSection /> },
  { id: 'history', title: 'history', section: <HistorySection /> },
  { id: 'testing', title: 'testing' },
  { id: 'specimens', title: 'specimens', section: <SpecimensSection /> }
];

function FormContent() {
  const styles = useStyles();

  useTOC();

  const sectionContent = useMemo(
    () =>
      sections.map(({ id, title, section }) => (
        <div className={styles.root} key={id}>
          <FormSectionHeader id={id} title={title} />
          {section}
        </div>
      )),
    [styles.root]
  );

  return (
    <>
      {sectionContent}

      <Grid container justify="flex-end" className={styles['submit-button']}>
        <Button type="submit" variant="contained" color="secondary" size="large">
          Submit Form
        </Button>
      </Grid>
    </>
  );
}

FormContent.whyDidYouRender = true;

export default FormContent;
