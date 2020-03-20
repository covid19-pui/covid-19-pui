import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext([]);

const FormProvider = ({ children, value }) => {
  const [form, setForm] = useState({});
  return <FormContext.Provider value={[form, setForm]}>{children}</FormContext.Provider>;
};

const useForm = () => useContext(FormContext);

export default FormProvider;
export { useForm };
