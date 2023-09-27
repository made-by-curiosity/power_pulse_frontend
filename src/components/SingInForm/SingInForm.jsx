import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';

import {
  Text,
  ContainerField,
  LinkSingUp,
  TextSingUp,
  DivSingUp,
  ContainerSingIn,
  BtnWrapper,
} from './SingInForm.styled';

import { Title } from 'components/Title/Title';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ButtonGoogle } from 'components/ButtonGoogle/ButtonGoogle';
import { MainButton } from 'components/MainButton/MainButton';
import { googleOAuth } from 'services/googleOAuth';


const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const passwordRegex =
  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/;

const initialValues = {
  email: '',
  password: '',
};

const schema = object({
  email: string()
    .email()
    .matches(emailRegex, 'Invalid email format')
    .required(),
  password: string()
    .matches(passwordRegex, 'Must contain at least 1 capital and 1 digit')
    .required(),
});

const SignInForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    // try {
    //   dispatch(logIn(values));
    // } catch (error) {
    //   console.log("eroooor signin")
    // }
    dispatch(logIn(values));
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
              />
            </ContainerField>
            <ContainerField>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                passwordBtn
                autoComplete="off"
                component={CustomInput}
                inputStyles={{ gap: '20px' }}
              />
            </ContainerField>

            <BtnWrapper>
              <MainButton
                text="Sign In"
                type="submit"
                filled
                btnStyles={{ width: 'max-content' }}
              />
              <ButtonGoogle handleClick={googleOAuth}>With Google</ButtonGoogle>
            </BtnWrapper>
          </Form>
        </Formik>
        <DivSingUp>
          <TextSingUp>Don’t have an account? </TextSingUp>
          <LinkSingUp to={'/signup'}>Sign Up</LinkSingUp>
        </DivSingUp>
      </ContainerSingIn>
    </>
  );
};

export default SignInForm;
