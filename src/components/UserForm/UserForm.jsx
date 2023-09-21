import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import useMediaQuery from '@mui/material/useMediaQuery';

import { CustomInput } from 'components/CustomInput/CustomInput';
import { CustomGroupRadio } from 'components/CustomRadio/CustomGroupRadio';
import { MainButton } from 'components/MainButton/MainButton';

import {
  Title,
  UserFormWrapper,
  UserBasicInfoWrapper,
  UserOtherInfoWrapper,
  InnerWrapper,
  GenderWrap,
  BloodWrap,
  LevelWrap,
  RadioGroupWrap,
} from './UserForm.styled';

export const UserForm = ({ user }) => {
  const {
    name,
    email,
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    lifeStyleType,
  } = user;

  const tablet = useMediaQuery('(min-width:768px)');

  const initialValues = {
    name: name,
    email: email,
    height: height,
    currentWeight: currentWeight,
    desiredWeight: desiredWeight,
    birthday: birthday,
    blood: blood,
    gender: sex,
    level: lifeStyleType,
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
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

            <RadioGroupWrap>
              <BloodWrap>
                <CustomGroupRadio
                  label="Blood"
                  name="blood"
                  radioGroupDirection={true}
                  typographyStyling={
                    tablet ? { fontSize: 16 } : { fontSize: 14 }
                  }
                  formLabelStyling={
                    tablet ? { fontSize: 16 } : { fontSize: 14 }
                  }
                  options={[
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                  ]}
                />
              </BloodWrap>
              <GenderWrap>
                <CustomGroupRadio
                  label="Gender"
                  name="gender"
                  radioGroupDirection={true}
                  typographyStyling={
                    tablet ? { fontSize: 16 } : { fontSize: 14 }
                  }
                  formLabelStyling={
                    tablet ? { fontSize: 16 } : { fontSize: 14 }
                  }
                  options={[
                    { value: 'female', label: 'Female' },
                    { value: 'male', label: 'Male' },
                    { value: 'other', label: 'Other' },
                  ]}
                />
              </GenderWrap>
            </RadioGroupWrap>
            <LevelWrap>
              <CustomGroupRadio
                label="Level"
                name="level"
                radioGroupDirection={false}
                typographyStyling={tablet ? { fontSize: 16 } : { fontSize: 14 }}
                formControlLabelStyling={tablet ? { mb: -1 } : { mb: 0.5 }}
                formLabelStyling={
                  tablet ? { mb: 0.5, fontSize: 16 } : { mb: 0.5 }
                }
                options={[
                  {
                    value: 'sedentary',
                    label:
                      'Sedentary lifestyle (little or no physical activity)',
                  },
                  {
                    value: 'light',
                    label:
                      'Light activity (light exercises/sports 1-3 days per week)',
                  },
                  {
                    value: 'moderately',
                    label:
                      'Moderately active (moderate exercises/sports 3-5 days per week)',
                  },
                  {
                    value: 'very',
                    label:
                      'Very active (intense exercises/sports 6-7 days per week)',
                  },
                  {
                    value: 'extremely',
                    label:
                      'Extremely active (very strenuous exercises/sports and physical work)',
                  },
                ]}
              />
            </LevelWrap>

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
