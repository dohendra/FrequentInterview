// import React from 'react';
import Form from '../components/Form';
import { FormProvider } from '../components/FormContext'
const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold mb-6">Registration Form</h1>
      <FormProvider>
      <Form />
    </FormProvider>
    </div>
  );
};

export default HomePage;
