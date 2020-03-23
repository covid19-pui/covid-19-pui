const exposureInitialValues = {
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

// DateField names need to be null, all other can be ''
export const initialFormValues = {
  // identifiers
  knownContact: '',
  contactId: '',
  reportingJurisdiction: '',
  reportingHealthDept: '',
  caseStateLocalId: '',
  CDC2019nCoVID: '',
  NNDSSCaseId: '',
  // interviewer
  interviewerFirstName: '',
  interviewerLastName: '',
  interviewerAffiliationOrganization: '',
  interviewerTelephone: '',
  interviewerEmail: '',
  // basic information
  currentStatus: '',
  testingStatus: '',
  puiReportDate: null,
  state: '',
  caseReportDate: null,
  county: '',
  // demographics
  dateOfBirth: null,
  ethnicity: '',
  age: '',
  ageUnits: '',
  race: '',
  sex: '',
  otherRace: '',
  // patient care
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
  deathDateUnknown: '',
  // exposure
  ...exposureInitialValues,
  // discovery
  discoveryProcess: '',
  dgmqid: '',
  otherDiscoveryProcess: '',
  // history
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
  otherDiseaseSpecify: '',
  // symptoms
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
  symptomAbdominalPain: '',
  symptomDiarrhea: '',
  symptomOther: '',
  symptomOtherSpecify: '',
  // specimens
  specimenCollected: '',
  specimens: []
};

let id = 0;
export function createForm() {
  return {
    ...initialFormValues,
    _id: ++id
  };
}
