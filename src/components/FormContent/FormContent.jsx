import React, { useMemo } from 'react';
import { Formik, Form } from 'formik';
import { Button, Grid } from '@material-ui/core';
import download from 'downloadjs';

import useStyles from './styles';
import FormSectionHeader from 'components/FormSectionHeader';
import IdentifiersSection from 'components/sections/IdentifiersSection';
import InterviewerSection from 'components/sections/InterviewerSection';
import BasicInformationSection from 'components/sections/BasicInformationSection';
import DemographicsSection from 'components/sections/DemographicsSection';
import useTOC from 'hooks/useTOC';

const sections = [
  { id: 'identifiers', title: 'identifiers', section: <IdentifiersSection /> },
  { id: 'interviewer', title: 'interviewer', section: <InterviewerSection /> },
  { id: 'basicInformation', title: 'basic information', section: <BasicInformationSection /> },
  { id: 'demographics', title: 'demographics', section: <DemographicsSection /> },
  { id: 'patientCare', title: 'patient care' },
  { id: 'exposure', title: 'exposure' },
  { id: 'discovery', title: 'discovery' },
  { id: 'symptoms', title: 'symptoms' },
  { id: 'history', title: 'history' },
  { id: 'testing', title: 'testing' },
  { id: 'specimens', title: 'specimens' }
];

export const initialValues = {
  knownContact: null,
  contactId: '',
  reportingJurisdiction: '',
  reportingHealthDept: '',
  caseStateLocalId: '',
  CDC2019nCoVID: '',
  NNDSSCaseId: '',
  interviewerFirstName: '',
  interviewerLastName: '',
  interviewerAffiliationOrganization: '',
  interviewerTelephone: '',
  interviewerEmail: '',
  currentStatus: '',
  testingStatus: '',
  puiReportDate: null,
  state: null,
  caseReportDate: null,
  county: null,
  dateOfBirth: null,
  ethnicity: '',
  age: '',
  ageUnits: '',
  race: '',
  sex: '',
  otherRace: ''
};

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
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        download(JSON.stringify(values, 2, null), 'covid-19-pui-form.json', 'application/json');
      }}
    >
      <Form>
        {sectionContent}

        <Grid container justify="flex-end" className={styles['submit-button']}>
          <Button type="submit" variant="contained" color="secondary" size="large">
            Submit
          </Button>
        </Grid>
      </Form>
    </Formik>
  );
}

export default FormContent;
