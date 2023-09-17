import { ExampleText, ExampleWrapper, HeightInput } from './Example.styled';
import Button from '@mui/material/Button';
import icons from '../../assets/icons/svg-sprite.svg';
import { CustomInput } from 'components/CustomInput/CustomInput';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

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
});

export const Example = () => {
  const initialValues = {
    username: '',
    password: '',
    color: '',
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
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
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      <Button variant="contained">Contained</Button>
      <ExampleText>Пример использования emotion стилей</ExampleText>
      <div>
        <svg width="36" height="36" fill="blue" stroke="yellow">
          <use href={icons + '#icon-logout'} />
        </svg>
      </div>
    </ExampleWrapper>
  );
};
