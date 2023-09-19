import { FormData, Section, Step1, Step2, Step3, StepWrap,  FormWrap, ParamsFormTitle, ParamsFormSubTitle,  NextBtn, BtnWrap, MainBtnWrap, BackBtn, FieldWrap} from "components/ParamsForm/ParamsForm.styled"
import { useState } from "react";

import icons from '../../assets/icons/svg-sprite.svg';



import { CustomGroupRadio } from "components/CustomRadio/CustomGroupRadio";


import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from "components/CustomInput/CustomInput";

import { MainButton } from "components/MainButton/MainButton";


const today = new Date();
    const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

const validationSchema = Yup.object({
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
  birthday: Yup.date()
    .max(eighteenYearsAgo, 'You must be older than 18 years old')
    .required('Height is required'),
});

export const ParamsForm = () => {
  const initialValues = {
    height: "",
    currentWeight: "",
    desiredWeight: "",
    birthday: "",
  };


    // const [height, setHeight] = useState('');
    // const [currentWeight, setCurrentWeight] = useState('');
    // const [desiredWeight, setDesiredWeight] = useState('');
    // const [birthday, setBirthday] = useState('');
  

    const [step, setStep] = useState(1);


    const handleClickNext = () => {
        setStep(state => state + 1);
    }

    const handleClickBack = () => {
        setStep(state => state - 1);
    }


    const onSubmit = (values, { resetForm }) => {
      console.log(values);
      resetForm();
    };

    return (
        <>
            { step === 1 &&  
            <>
                <ParamsFormTitle>Get closer to your goals!</ParamsFormTitle>
                <ParamsFormSubTitle>To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:</ParamsFormSubTitle>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                
                <Form>
                  <FormWrap>
                    <FieldWrap>
                    <Field
                      label="Height"
                      name="height"
                      type="text"
                      autoComplete="off"
                      component={CustomInput}
                      inputStyles={{ width: '155px' }}
                    />
                    </FieldWrap>
                    <FieldWrap>
                    <Field
                      label="Current Weight"
                      name="currentWeight"
                      type="text"
                      autoComplete="off"
                      component={CustomInput}
                      inputStyles={{ width: '160px' }}
                    />
                    </FieldWrap>
            
                    <FieldWrap>
                    <Field
                      label="Desired Weight"
                      name="desiredWeight"
                      type="text"
                      autoComplete="off"
                      component={CustomInput}
                      inputStyles={{ width: '155px' }}
                    />
                    </FieldWrap>
                    <FieldWrap>
                    <Field
                      label="Birthday"
                      name="birthday"
                      type="text"
                      autoComplete="off"
                      component={CustomInput}
                      inputStyles={{ width: '160px' }}
                    />
                    </FieldWrap>
                  </FormWrap>
              </Form>
            </Formik>
            </>}

            { step === 2 &&
            <>
              <ParamsFormTitle>Get closer to your goals!</ParamsFormTitle> 
              <CustomGroupRadio
              formControlStyling={{mb: 2}}
              radioGroupDirection={true}
              formLabelStyling={{
                color: '#EFEDE8',
                fontSize: 16,
                '&.Mui-focused': {
                color: '#EFEDE8',
              }
              }}/>
            </>}

            { step === 3 && 
            <>
             <ParamsFormTitle>Dear User</ParamsFormTitle>
             <ParamsFormSubTitle>Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach.</ParamsFormSubTitle>
            </>
            
            }
           <BtnWrap>
           {step === 3 && <MainBtnWrap>
            <MainButton 
              type='submit'
              text='Go'
              filled
              btnStyles={{display: "inline-flex"}}
            />
           </MainBtnWrap> }
           { step > 1 && <BackBtn onClick={handleClickBack}>
                      <svg width="20" height="20"  stroke="#E6533C">
          <use href={icons + '#icon-back'} /> 
        </svg> Back
            </BackBtn>}
            
            {step < 3 && <NextBtn onClick={handleClickNext}>
                    Next <svg width="20" height="20"  stroke="#E6533C">
          <use href={icons + '#icon-nextarrow'} />
        </svg>
            </NextBtn>}
           </BtnWrap>
           
            
            <StepWrap>
                <Step1 step={step}></Step1>
                <Step2 step={step}></Step2>
                <Step3 step={step}></Step3>
            </StepWrap>

            
        </>
        
       
    )
}






  
