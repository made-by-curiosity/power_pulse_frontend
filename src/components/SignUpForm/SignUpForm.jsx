import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import bg1x from '../../assets/images/bg_img/bg_main.jpg';
import {
  RegisterContainer,
  RegisterForm,
  Text,
  SecondText,
  BgImg,
} from './SignUpForm.styled';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { MainButton } from 'components/MainButton/MainButton';

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

const handleSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

export const SignUpForm = () => {
  return (
    <RegisterContainer>
      <h2>Sign Up</h2>
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
        <NavLink
          style={{ color: '#EFEDE8', textDecorationLine: 'underline' }}
          to="/signin"
        >
          Sign In
        </NavLink>
      </SecondText>
      <BgImg src={bg1x} alt="sport" />
    </RegisterContainer>
  );
};
