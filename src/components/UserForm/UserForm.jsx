import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
};

export const UserForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={1111}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
