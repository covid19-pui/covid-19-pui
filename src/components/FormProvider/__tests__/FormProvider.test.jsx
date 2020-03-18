import React from 'react';
import { render } from '@testing-library/react';
import FormProvider, { useForm } from '../FormProvider';

const formText = 'The name is';
const formTextRegExp = new RegExp(formText);
const mockDefaultValue = { name: 'Bond' };
const expectedText = value => `${formText} ${value}`;

const MockConsumer = () => {
  const form = useForm();
  return <div>{`${formText} ${form.name}`}</div>;
};
describe('<FormProvider/>', () => {
  test('has undefined properties without a provided default', () => {
    const { getByText } = render(
      <FormProvider>
        <MockConsumer />
      </FormProvider>
    );
    expect(getByText(formTextRegExp)).toHaveTextContent(expectedText(undefined));
  });

  test('accepts a default', () => {
    const { getByText } = render(
      <FormProvider value={mockDefaultValue}>
        <MockConsumer />
      </FormProvider>
    );
    expect(getByText(formTextRegExp)).toHaveTextContent(expectedText(mockDefaultValue.name));
  });
});
