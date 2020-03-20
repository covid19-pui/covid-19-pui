import React from 'react';
import RadioField from 'components/forms/RadioField';

const options = [
  { value: 'true', label: 'Yes' },
  { value: 'false', label: 'No' }
];

function IdentifiersSection() {
  return (
    <RadioField
      label="Is the case-patient a known contact of a prior source case-patient?"
      formKey="knownContact"
      options={options}
    />
  );
}

export default IdentifiersSection;
