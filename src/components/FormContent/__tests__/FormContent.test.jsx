import React from 'react';
import { render } from '@testing-library/react';
import FormContent from '../FormContent';

const MockTOC = () => {
  return <div className="toc"></div>;
};

test('renders form content', () => {
  render(
    <div>
      <MockTOC />
      <div className="tocSection">
        <FormContent />
      </div>
    </div>
  );
});
