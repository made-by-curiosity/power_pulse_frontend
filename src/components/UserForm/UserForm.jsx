import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { CustomGroupRadio } from 'components/CustomRadio/CustomGroupRadio';
import { MainButton } from 'components/MainButton/MainButton';

import { css } from '@emotion/react';

import {
  Title,
  UserFormWrapper,
  UserBasicInfoWrapper,
  UserOtherInfoWrapper,
  InnerWrapper,
} from './UserForm.styled';

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
    // console.log(values);
    // console.log(actions);
    // actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={1111}
        onSubmit={handleSubmit}
      >
        <UserFormWrapper>
          <Form>
            <Title>Basic info</Title>
            <UserBasicInfoWrapper>
              <Field
                name="name"
                type="text"
                autoComplete="off"
                successFeedback={false}
                component={CustomInput}
                // inputStyles={{ width: '100%' }}
              />
              <Field
                name="email"
                type="text"
                autoComplete="off"
                successFeedback={false}
                disabled="true"
                component={CustomInput}
                // inputStyles={{ width: '100%' }}
              />
            </UserBasicInfoWrapper>

            <UserOtherInfoWrapper>
              <InnerWrapper>
                <Field
                  label="Height"
                  name="height"
                  type="text"
                  autoComplete="off"
                  successFeedback={false}
                  component={CustomInput}
                  inputStyles={{ width: '165px' /*, marginBottom: '14px'*/ }}
                />
                <Field
                  label="Current Weight"
                  name="currentWeight"
                  type="text"
                  autoComplete="off"
                  successFeedback={false}
                  component={CustomInput}
                  inputStyles={{ width: '156px' }}
                />
              </InnerWrapper>
              <InnerWrapper>
                <Field
                  label="Desired Weight"
                  name="desiredWeight"
                  type="text"
                  autoComplete="off"
                  successFeedback={false}
                  component={CustomInput}
                  inputStyles={{ width: '165px' }}
                />
                <Field
                  name="birthday"
                  type="date"
                  autoComplete="off"
                  successFeedback={false}
                  component={CustomInput}
                  inputStyles={{ width: '156px' }}
                />
              </InnerWrapper>
            </UserOtherInfoWrapper>

            {/* <CustomGroupRadio /> */}

            <br />
            <MainButton
              type="submit"
              text="Save"
              filled
              disabled={false}
              // btnStyles={{ marginBottom: '44px' }}
              // modalButton="false"
              // onClick={handleSubmit}
            />
          </Form>
        </UserFormWrapper>
      </Formik>
    </>
  );
};
