import { ExampleText, ExampleWrapper } from './Example.styled';
import icons from '../../assets/icons/svg-sprite.svg';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MainButton } from 'components/MainButton/MainButton';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be less  than 20 characters')
    .required('Username is required')
    .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .max(20, 'Must be less  than 20 characters')
    .required('Password is required')
    .matches(/^[a-zA-Z0-9]+$/, 'Cannot contain special characters or spaces'),
  age: Yup.number()
    .positive()
    .min(150, 'must me more than 150')
    .required('Age is required'),
});

export const Example = () => {
  const initialValues = {
    username: '',
    password: '',
    color: '',
    age: '',
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const handleClick = e => {
    console.log(e.target);
  };

  return (
    <ExampleWrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            width: '100%',
          }}
        >
          <Field
            label="Username"
            name="username"
            type="text"
            autoComplete="off"
            component={CustomInput}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            passwordBtn
            autoComplete="off"
            component={CustomInput}
          />
          <Field
            name="color"
            type="text"
            autoComplete="off"
            successFeedback={false}
            component={CustomInput}
            inputStyles={{ width: '200px' }}
          />
          <Field
            name="age"
            label="Age"
            type="text"
            autoComplete="off"
            component={CustomInput}
            inputStyles={{ width: '200px' }}
          />
          <MainButton
            type="submit"
            text="Sign Up"
            filled
            onClick={handleClick}
            btnStyles={{
              width: 'max-content',
              margin: '0 auto 10px',
            }}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <ExampleText>Пример использования emotion стилей</ExampleText>
      <div>
        <svg width="36" height="36" fill="blue" stroke="yellow">
          <use href={icons + '#icon-logout'} />
        </svg>
      </div>
    </ExampleWrapper>
  );
};
