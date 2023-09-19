import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { CustomInput } from 'components/CustomInput/CustomInput';

export const UserForm = ({ user }) => {
  const { name, email, height, currentWeight, desiredWeight, birthday } = user;

  const initialValues = {
    name: name,
    email: email,
    height: height,
    currentWeight: currentWeight,
    desiredWeight: desiredWeight,
    birthday: birthday,
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    // actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={1111}
      onSubmit={handleSubmit}
    >
      <Form>
        <p>Basic info</p>

        <Field
          name="name"
          type="text"
          autoComplete="off"
          component={CustomInput}
          // inputStyles={{ width: '200px' }}
        />

        <Field
          name="email"
          type="text"
          autoComplete="off"
          component={CustomInput}
        />

        <Field
          label="Height"
          name="height"
          type="text"
          autoComplete="off"
          component={CustomInput}
          inputStyles={{ width: '165px' }}
        />

        <Field
          label="Current Weight"
          name="currentWeight"
          type="text"
          autoComplete="off"
          component={CustomInput}
          inputStyles={{ width: '165px' }}
        />

        <Field
          label="Desired Weight"
          name="desiredWeight"
          type="text"
          autoComplete="off"
          component={CustomInput}
          inputStyles={{ width: '156px' }}
        />

        <Field
          name="birthday"
          type="date"
          autoComplete="off"
          component={CustomInput}
          inputStyles={{ width: '156px' }}
        />

        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
