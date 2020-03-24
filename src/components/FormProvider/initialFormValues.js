// DateField names need to be null, all other can be ''

const patientHeaderValues = {
  patientFirstName: '',
  patientLastName: ''
};

const identifierValues = {
  knownContact: '',
  contactId: '',
  reportingJurisdiction: '',
  reportingHealthDept: '',
  caseStateLocalId: '',
  CDC2019nCoVID: '',
  NNDSSCaseId: ''
};

const interviewerValues = {
  interviewerFirstName: '',
  interviewerLastName: '',
  interviewerAffiliationOrganization: '',
  interviewerTelephone: '',
  interviewerEmail: ''
};

const basicInformationValues = {
  currentStatus: '',
  testingStatus: '',
  puiReportDate: null,
  state: '',
  caseReportDate: null,
  county: ''
};

const demographicsValues = {
  dateOfBirth: null,
  ethnicity: '',
  age: '',
  ageUnits: '',
  race: '',
  sex: '',
  otherRace: ''
};

const patientCareValues = {
  positiveSpecimenCollected: '',
  firstPositiveSpecimenDate: null,
  firstPositiveSpecimenDateUnknown: '',
  pneumonia: '',
  acuteRespiratoryDistressSyndrome: '',
  anotherDiagnosisEtiology: '',
  abnormalChestXray: '',
  hospitalized: '',
  admissionDate: null,
  admissionDateUnknown: '',
  dischargeDate: null,
  dischargeDateUnknown: '',
  dischargeDateNotApplicable: '',
  intensiveCareUnit: '',
  mechanicalVentilationIntubation: '',
  totalDaysWithMV: '',
  ecmo: '',
  death: '',
  deathDate: null,
  deathDateUnknown: ''
};

const exposureValues = {
  locationsTraveledTo: [''],
  heathCareWorker: '',
  historyInChinaHealthcareFacility: '',
  travelOutsideUS: '',
  travelToChina: '',
  chinaLocationsTraveledTo: [''],
  travelToNonUS: [''],
  contactWithCOVIDpatient: '',
  sourceOfContact: [''],
  healthcareContact: '',
  sourceContactUSCase: '',
  sourceContactCaseID: '',
  animalExposure: '',
  exposureToCluster: '',
  sourceNotListed: '',
  sourceNotListedSource: ''
};

const discoveryValues = {
  discoveryProcess: '',
  dgmqid: '',
  otherDiscoveryProcess: ''
};

const historyValues = {
  pregnant: '',
  currentSmoker: '',
  formerSmoker: '',
  preExistingConditions: '',
  chronicLungDisease: '',
  diabetes: '',
  cardiovascularDisease: '',
  chronicRenalDisease: '',
  chronicLiverDisease: '',
  immunocomprimised: '',
  neurologicDisease: '',
  neurologicDiseaseSpecify: '',
  otherChronicDisease: '',
  otherDiseaseSpecify: ''
};

const symptomsValues = {
  isSymptomatic: '',
  dateOfSymptomResolution: null,
  dateOfSymptomResolutionUnknown: '',
  presentedSymptoms: '',
  symptomOnsetDate: null,
  symptomOnsetDateUnknown: '',
  symptom104Fever: '',
  symptomSubectiveFever: '',
  symptomChills: '',
  symptomMuscleAches: '',
  symptomRhinorrhea: '',
  symptomSoreThroat: '',
  symptomCough: '',
  symptomDyspnea: '',
  symptomNausea: '',
  symptomHeadache: '',
  symptomAbdominalPain: '',
  symptomDiarrhea: '',
  symptomOther: '',
  symptomOtherSpecify: ''
};

const specimensValues = {
  specimenCollected: '',
  specimens: []
};

const specimenValues = {
  specimenType: '',
  specimenTypeOther: '',
  specimenDateCollected: null,
  specimenID: '',
  specimenStateLabResult: '',
  specimenCDCLabResult: '',
  stateLabTested: '',
  sentToCDC: ''
};

export const initialFormValues = {
  ...patientHeaderValues,
  ...identifierValues,
  ...interviewerValues,
  ...basicInformationValues,
  ...demographicsValues,
  ...patientCareValues,
  ...exposureValues,
  ...discoveryValues,
  ...historyValues,
  ...symptomsValues,
  ...specimensValues
};

let id = 0;
export function createForm() {
  return {
    ...initialFormValues,
    _id: ++id
  };
}

let specimenId = 0;
export function createSpecimen() {
  return {
    ...specimenValues,
    _id: ++specimenId
  };
}
