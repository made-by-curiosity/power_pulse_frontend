// import { Container } from 'components/Container/Container';
import { Formik, Form, Field } from 'formik';
import { Button, Container,  Text, TextBtn } from './SingInPage.styled';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { Title} from 'components/Title/Title';

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
    <Title>
      Sign In
    </Title>
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
          component={CustomInput}
        />
        <Field type="password"
          name="password"
          placeholder="Password"
          label="Password"
          passwordBtn
          autoComplete="off"
          component={CustomInput}
        />
        <Button type="submit"><TextBtn>Submit</TextBtn></Button>
      </Form>
    </Formik>
    <img src="/src/assets/images/bg_img/bg_main.jpg" alt="" width={446} height={669} />
    </Container>
  );
};

export default SignInPage;
