import { useDispatch } from 'react-redux';

import { updateName, updateUserParams } from 'redux/auth/operations';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';

import { CustomInput } from 'components/CustomInput/CustomInput';
import { CustomGroupRadio } from 'components/CustomRadio/CustomGroupRadio';
import { MainButton } from 'components/MainButton/MainButton';

import {
  Title,
  UserFormWrapper,
  UserBasicInfoWrapper,
  UserOtherInfoWrapper,
  InnerWrapper,
  GenderWrap,
  BloodWrap,
  LevelWrap,
  RadioGroupWrap,
} from './UserForm.styled';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  height: Yup.number('Number')
    .typeError('Height must be a number')
    .positive('Height must be a positive number.')
    .min(150, 'Height must be at least 150 cm')
    .required('Height is required'),
  currentWeight: Yup.number()
    .typeError('Height must be a number')
    .min(35, 'Current weight must be at least 35 kg')
    .positive('Current weight must be a positive number.')
    .required('Current weight is required'),
  desiredWeight: Yup.number()
    .typeError('Height must be a number')
    .min(35, 'Desired weight  must be at least 35 kg')
    .positive('Weight must be a positive number.')
    .required('Height is required'),
  // birthday: Yup.date().typeError('Must be a date (dd.mm.yyyy)'),
  // .required('Bithday is required'),
});

export const UserForm = ({ userInfo }) => {
  const { name, email, userParams } = userInfo;

  const {
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  } = userParams;

  const tablet = useMediaQuery('(min-width:768px)');

  const initialValues = {
    name: name,
    email: email,
    height: height,
    currentWeight: currentWeight,
    desiredWeight: desiredWeight,
    birthday: birthday,
    blood: blood,
    sex: sex,
    levelActivity: levelActivity,
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log(values);

    const { name, email, ...userParams } = values;

    dispatch(updateName({ name: name }));
    dispatch(updateUserParams(userParams));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <UserFormWrapper>
          <Form>
            <Title>Basic info</Title>
            <UserBasicInfoWrapper>
              <Field
                name="name"
                type="text"
                autoComplete="off"
                successFeedback={false}
                component={CustomInput}
                inputStyles={{}}
              />
              <Field
                name="email"
                type="text"
                autoComplete="off"
                successFeedback={false}
                disabled="true"
                component={CustomInput}
                inputStyles={{ color: 'rgba(239, 237, 232, 0.6)' }}
              />
            </UserBasicInfoWrapper>

            <UserOtherInfoWrapper>
              <InnerWrapper>
                <Field
                  label="Height"
                  name="height"
                  type="number"
                  autoComplete="off"
                  successFeedback={false}
                  component={CustomInput}
                  inputStyles={{ width: '165px' }}
                />
                <Field
                  label="Current Weight"
                  name="currentWeight"
                  type="number"
                  autoComplete="off"
                  successFeedback={false}
                  component={CustomInput}
                  inputStyles={{ width: '156px' }}
                />
              </InnerWrapper>
              <InnerWrapper>
                <Field
                  label="Desired Weight"
                  name="desiredWeight"
                  type="number"
                  autoComplete="off"
                  successFeedback={false}
                  component={CustomInput}
                  inputStyles={{ width: '165px' }}
                />
                <Field
                  name="birthday"
                  type="text"
                  autoComplete="off"
                  successFeedback={false}
                  component={CustomInput}
                  inputStyles={{ width: '156px' }}
                />
              </InnerWrapper>
            </UserOtherInfoWrapper>

            <RadioGroupWrap>
              <BloodWrap>
                <CustomGroupRadio
                  label="Blood"
                  name="blood"
                  radioGroupDirection={true}
                  formControlStyling={{ mb: 0 }}
                  formControlLabelStyling={{ mb: 0, mr: 1.1 }}
                  typographyStyling={
                    tablet ? { fontSize: 16 } : { fontSize: 14 }
                  }
                  formLabelStyling={
                    tablet
                      ? { fontSize: 14, color: 'rgba(239, 237, 232, 0.50)' }
                      : { fontSize: 12, color: 'rgba(239, 237, 232, 0.50)' }
                  }
                  options={[
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4' },
                  ]}
                />
              </BloodWrap>
              <GenderWrap>
                <CustomGroupRadio
                  label="Sex"
                  name="sex"
                  radioGroupDirection={true}
                  formControlStyling={{ mb: 0 }}
                  formControlLabelStyling={{ mb: 0, mr: 1.1 }}
                  typographyStyling={
                    tablet ? { fontSize: 16 } : { fontSize: 14 }
                  }
                  formLabelStyling={
                    tablet
                      ? { fontSize: 14, color: 'rgba(239, 237, 232, 0.50)' }
                      : { fontSize: 12, color: 'rgba(239, 237, 232, 0.50)' }
                  }
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                  ]}
                />
              </GenderWrap>
            </RadioGroupWrap>
            <LevelWrap>
              <CustomGroupRadio
                label="Level activity"
                name="levelActivity"
                radioGroupDirection={false}
                typographyStyling={tablet ? { fontSize: 16 } : { fontSize: 14 }}
                formControlLabelStyling={tablet ? { mb: -1 } : { mb: 0.5 }}
                formLabelStyling={
                  tablet
                    ? {
                        mb: 0.5,
                        fontSize: 14,
                        color: 'rgba(239, 237, 232, 0.50)',
                      }
                    : {
                        mb: 0.5,
                        fontSize: 12,
                        color: 'rgba(239, 237, 232, 0.50)',
                      }
                }
                options={[
                  {
                    value: '1',
                    label:
                      'Sedentary lifestyle (little or no physical activity)',
                  },
                  {
                    value: '2',
                    label:
                      'Light activity (light exercises/sports 1-3 days per week)',
                  },
                  {
                    value: '3',
                    label:
                      'Moderately active (moderate exercises/sports 3-5 days per week)',
                  },
                  {
                    value: '4',
                    label:
                      'Very active (intense exercises/sports 6-7 days per week)',
                  },
                  {
                    value: '5',
                    label:
                      'Extremely active (very strenuous exercises/sports and physical work)',
                  },
                ]}
              />
            </LevelWrap>

            <MainButton type="submit" text="Save" filled disabled={false} />
          </Form>
        </UserFormWrapper>
      </Formik>
    </>
  );
};
