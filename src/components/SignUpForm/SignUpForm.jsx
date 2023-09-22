import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Title } from 'components/Title/Title';

import {
  RegisterContainer,
  RegisterForm,
  Text,
  SecondText,
} from './SignUpForm.styled';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { MainButton } from 'components/MainButton/MainButton';
import { BckgSignUp } from 'components/BckgSignUp/BckgSignUp';
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  email: Yup.string().email('Invalid email').required('Required field'),
  password: Yup.string().required('Required field'),
});

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

function validatePass(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/i.test(value)
  ) {
    error = 'Invalid password';
  }
  return error;
}

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    dispatch(signUp(values));

    resetForm();
  };

  return (
    <BckgSignUp>
      <RegisterContainer>
        <Title>Sign Up</Title>
        <Text>
          Thank you for your interest in our platform. To complete the
          registration process, please provide us with the following
          information.
        </Text>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          <RegisterForm>
            <Field
              name="name"
              label="Name"
              type="text"
              autoComplete="off"
              component={CustomInput}
            />

            <Field
              name="email"
              validate={validateEmail}
              label="Email"
              type="email"
              autoComplete="off"
              component={CustomInput}
            />

            <Field
              name="password"
              type="password"
              validate={validatePass}
              label="Password"
              autoComplete="off"
              component={CustomInput}
              passwordBtn
            />

            <MainButton
              type="submit"
              text="Sign Up"
              filled
              btnStyles={{ width: 'max-content', marginBottom: '12px' }}
            />
          </RegisterForm>
        </Formik>
        <SecondText>
          Already have account?{' '}
          <Link
            style={{ color: '#EFEDE8', textDecorationLine: 'underline' }}
            to="/signin"
          >
            Sign In
          </Link>
        </SecondText>
      </RegisterContainer>
    </BckgSignUp>
  );
};
