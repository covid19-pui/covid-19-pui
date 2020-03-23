export const initialSpecimenValues = {
  specimenType: '',
  specimenDateCollected: null,
  specimenID: '',
  specimenStateLabResult: '',
  specimenCDCLabResult: ''
};

let id = 0;

export function createSpecimen() {
  return {
    ...initialSpecimenValues,
    _id: ++id
  };
}
