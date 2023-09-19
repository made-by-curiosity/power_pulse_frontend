// import { Container } from 'components/Container/Container';
import { Formik, Form, Field } from 'formik';
import { object, string} from 'yup';

import { CustomInput } from 'components/CustomInput/CustomInput';
import { Title} from 'components/Title/Title';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';

import { Button,  Text, TextBtn, ContainerField, LinkSingUp, TextSingUp, DivSingUp, ContainerSingIn } from './SingInPage.styled';
import { Container } from 'components/Container/Container';

const SignInPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const schema = object({
    email: string().email().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Error email").required(),
    password: string().matches(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/, "Error password").required()
  });

  const onSubmit = (values, {resetForm}) => {
    console.log(values)
    resetForm();
  }

  return (
     <BackgroundImg>
    <Container>
     
      <ContainerSingIn>
    <Title>
      Sign In
    </Title>
    <Text>
      Welcome! Please enter your credentials to login to the platform:
    </Text>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
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
        <Field type="password"
          name="password"
          placeholder="Password"
          label="Password"
          passwordBtn
          autoComplete="off"
          component={CustomInput}
          inputStyles={{gap: '20px'}}
        />
        <Button type="submit"><TextBtn>Sign In</TextBtn></Button>
      </Form>
      </Formik>
      <DivSingUp>
        <TextSingUp>Don’t have an account? </TextSingUp>
        <LinkSingUp to={'/signup'}>Sign Up</LinkSingUp>
        </DivSingUp>
        </ContainerSingIn>
       
      </Container>
       </BackgroundImg>
    
  );
};

export default SignInPage;
