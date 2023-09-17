import { Container } from 'components/Container/Container';
import { Formik, Form, Field } from 'formik';
import { Button } from './SingInPage.styled';

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

  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={onSubmit}>
      <Form>
        <Field
          type="email"
          name="email"
          placeholder="Email"
          label="Email"
          autoComplete="off"
          component={CustomInput } />
        <Field type="password"
          name="password"
          placeholder="Password"
          label="Password"
          passwordBtn
          autoComplete="off"
          component={CustomInput} />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

export default SignInPage;
