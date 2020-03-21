import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormProvider, { useForm } from '../FormProvider';

const formText = 'The name is';
const formTextRegExp = new RegExp(formText);
const mockDefaultValue = { name: 'Bond' };
const expectedText = value => `${formText} ${value}`;
const newFormValue = { name: 'James' };

const MockConsumer = () => {
  const { form, setForm } = useForm();
  const onClick = () => {
    setForm(newFormValue);
  };
  return <div onClick={onClick}>{`${formText} ${form.name}`}</div>;
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

  test('provides a method to update the context', () => {
    const { getByText } = render(
      <FormProvider value={mockDefaultValue}>
        <MockConsumer />
      </FormProvider>
    );
    expect(getByText(formTextRegExp)).toHaveTextContent(expectedText(mockDefaultValue.name));
    fireEvent.click(getByText(formTextRegExp));
    expect(getByText(formTextRegExp)).toHaveTextContent(expectedText(newFormValue.name));
  });
});
