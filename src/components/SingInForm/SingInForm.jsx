import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import axios from 'axios';
import { Notify } from 'notiflix';

import {
  Button,
  Text,
  TextBtn,
  ContainerField,
  LinkSingUp,
  TextSingUp,
  DivSingUp,
  ContainerSingIn,
} from './SingInForm.styled';

import { CaloriesBtn } from 'components/CaloriesBtn/CaloriesBtn';
import { TutorialBtn } from 'components/TutorialBtn/TutorialBtn';
import { Title } from 'components/Title/Title';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

axios.defaults.baseURL = 'https://power-pulse.onrender.com';

const initialValues = {
  email: '',
  password: '',
};

const schema = object({
  email: string()
    .email()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Error email')
    .required(),
  password: string()
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/,
      'Error password'
    )
    .required(),
});

const validateEmail = value => {
  let errors;
  if (!value) {
    errors = 'Required';
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(value)) {
    errors = 'Invalid email address';
  }
  return errors;
};

const validatePassword = value => {
  let errors;
  if (!value) {
    errors = 'Required';
  } else if (
    !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/i.test(value)
  ) {
    errors = 'Invalid password';
  }
  return errors;
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const postData = async values => {
    try {
      const response = await axios.post('/api/auth/login', {
        email: values.email,
        password: values.password,
      });
      console.log(response);
      if (response.code === 401) {
        throw new Error(response.message);
      }

      dispatch(logIn(values));

      return response.json();
    } catch (error) {
      return Notify.failure(error.data);
    }
  };

  const onSubmit = (values, { resetForm }) => {
    postData(values);
    resetForm();
  };

  return (
    <>
      <ContainerSingIn>
        <Title>Sign In</Title>
        <Text>
          Welcome! Please enter your credentials to login to the platform:
        </Text>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={onSubmit}
        >
          <Form>
            <ContainerField>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                autoComplete="off"
                component={CustomInput}
                validate={validateEmail}
              />
            </ContainerField>
            <Field
              type="password"
              name="password"
              placeholder="Password"
              label="Password"
              passwordBtn
              autoComplete="off"
              component={CustomInput}
              validate={validatePassword}
              inputStyles={{ gap: '20px' }}
            />
            <Button type="submit">
              <TextBtn>Sign In</TextBtn>
            </Button>
          </Form>
        </Formik>
        <DivSingUp>
          <TextSingUp>Don’t have an account? </TextSingUp>
          <LinkSingUp to={'/signup'}>Sign Up</LinkSingUp>
        </DivSingUp>
      </ContainerSingIn>
      <CaloriesBtn />

      <TutorialBtn />
    </>
  );
};

export default SignInForm;
