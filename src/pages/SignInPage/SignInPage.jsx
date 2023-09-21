// import { Container } from 'components/Container/Container';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import axios from 'axios';

import { toast } from 'react-toastify';


import { CustomInput } from 'components/CustomInput/CustomInput';
import { Title } from 'components/Title/Title';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';

import {
  Button,
  Text,
  TextBtn,
  ContainerField,
  LinkSingUp,
  TextSingUp,
  DivSingUp,
  ContainerSingIn,
} from './SingInPage.styled';
import { Container } from 'components/Container/Container';
import { CaloriesBtn } from 'components/CaloriesBtn/CaloriesBtn';
import { TutorialBtn } from 'components/TutorialBtn/TutorialBtn';

axios.defaults.baseURL = 'https://power-pulse.onrender.com';

const SignInPage = () => {
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

 
  const postData = async ( values ) => {
    try {
      console.log(values);
      const response = await axios
        .post('/api/auth/login', {
          email: values.email,
          password: values.password,
        })
        .then(response => {
          if (response.code !== 200) {
            throw new Error(response.message)
          }
          return response.json();
        });
      
      
      return response;
    } catch (error) {
      toast.error('error',)
    }
  };

  const onSubmit = (values, { resetForm }) => {
    postData(values);
    resetForm();
  };

  return (
    <BackgroundImg>
      <Container>
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
      </Container>
    </BackgroundImg>
  );
};

export default SignInPage;
