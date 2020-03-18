import React, { createContext, useContext } from 'react';

const FormContext = createContext({});

const FormProvider = ({ children, value }) => {
  return <FormContext.Provider value={value ?? {}}>{children}</FormContext.Provider>;
};

const useForm = () => useContext(FormContext);

export default FormProvider;
export { useForm };
