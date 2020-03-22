import React from 'react';
import { render } from '@testing-library/react';

import FormProvider from 'components/FormProvider';

test('renders FormProvider', () => {
  render(
    <FormProvider>
      <div />
    </FormProvider>
  );
});
