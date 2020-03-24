import React, { useMemo } from 'react';
import { Button, Grid } from '@material-ui/core';
import clsx from 'clsx';

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

      <Grid container className={clsx(styles.root, styles['fine-print'])}>
        <p>Form Approved: OMB: 0920-1011 Exp. 4/23/2020</p>
        <p>
          Public reporting burden of this collection of information is estimated to average 30
          minutes per response, including the time for reviewing instructions, searching existing
          data sources, gathering and maintaining the data needed, and completing and reviewing the
          collection of information. An agency may not conduct or sponsor, and a person is not
          required to respond to a collection of information unless it displays a currently valid
          OMB control number. Send comments regarding this burden estimate or any other aspect of
          this collection of information including suggestions for reducing this burden to CDC/ATSDR
          Reports Clearance Officer; 1600 Clifton Road NE, MS D-74 Atlanta, Georgia 30333; ATTN: PRA
          (0920-1011)
        </p>
      </Grid>
    </>
  );
}

export default FormContent;
