// import { Container } from 'components/Container/Container';
import { Formik, Form, Field } from 'formik';
import { Button, Container, H1, Text } from './SingInPage.styled';

const SignInPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const schema = "";

  const onSubmit = (values, {resetForm}) => {
    console.log(values)
    resetForm();
  }

  return (<Container>
    <H1>
      Sign In
    </H1>
    <Text>
      Welcome! Please enter your credentials to login to the platform:
    </Text>
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Field
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
          autoComplete="off"
          // component={CustomInput}
        />
        <Field type="password"
          name="password"
          placeholder="Password"
          label="Password"
          passwordBtn
          autoComplete="off"
          // component={CustomInput}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
    </Container>
  );
};

export default SignInPage;
