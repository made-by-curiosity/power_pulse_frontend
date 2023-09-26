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
import { useDispatch } from 'react-redux';
import { signUp } from 'redux/auth/operations';
import { ButtonGoogle } from 'components/ButtonGoogle/ButtonGoogle';
import { BtnWrapper } from 'components/SingInForm/SingInForm.styled';

const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex =
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required field'),
  email: Yup.string()
    .matches(emailRegex, 'Invalid email format')
    .required('Required field'),
  password: Yup.string()
    .matches(passwordRegex, 'Must contain at least 1 capital and 1 digit')
    .required('Required field'),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    dispatch(signUp(values));

    resetForm();
  };

  return (
    <RegisterContainer>
      <Title>Sign Up</Title>
      <Text>
        Thank you for your interest in our platform. To complete the
        registration process, please provide us with the following information.
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
            label="Email"
            type="email"
            autoComplete="off"
            component={CustomInput}
          />

          <Field
            name="password"
            type="password"
            label="Password"
            autoComplete="off"
            component={CustomInput}
            passwordBtn
          />
          <BtnWrapper>
            <MainButton
              type="submit"
              text="Sign Up"
              filled
              btnStyles={{ width: 'max-content' }}
            />
            <ButtonGoogle>With Google</ButtonGoogle>
          </BtnWrapper>
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
  );
};
