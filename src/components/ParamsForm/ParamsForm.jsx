import { FormData, Section, Step1, Step2, Step3, StepWrap, RadioWrap, InputWrap, ParamsFormTitle, ParamsFormSubTitle, RadioGroupWrap} from "components/ParamsForm/ParamsForm.styled"
import { useState } from "react";

import { StyledDatepicker } from "components/DatePicker/DatePicker";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { CustomInput } from "components/CustomInput/CustomInput";


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


    const [blood, setBlood] = useState("1");
    const [sex, setSex] = useState('male');
    const [level, setLevel] = useState('light');

    const [step, setStep] = useState(1);

    

    const handleChangeBlood = (e) => {
        setBlood(e.target.value);
    }

    const handleChangeSex = (e) => {
        setSex(e.target.value);
    }

    const handleChangeLevel = (e) => {
        setLevel(e.target.value);
    }

    const handleClickNext = () => {
        setStep(state => state + 1);
    }

    const handleClickBack = () => {
        setStep(state => state - 1);
    }



    const FormLabelStyling = {
      color: '#EFEDE8',
      fontSize: 14,
      '&.Mui-focused': {
      color: '#EFEDE8',
    }
    }


 

    const onSubmit = (values, { resetForm }) => {
      console.log(values);
      resetForm();
    };

    return (
        <Section>
            { step === 1 &&  
            <>
                <ParamsFormTitle>Get closer to your goals!</ParamsFormTitle>
                <ParamsFormSubTitle>To ensure a personalized user experience and the proper functioning of our platform, we ask you to provide the following information about your weight, height and other relevant data:</ParamsFormSubTitle>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '35px',
            width: '100%',
          }}
        >
          <Field
            label="Height"
            name="height"
            type="text"
            autoComplete="off"
            component={CustomInput}
            inputStyles={{ width: '200px' }}
          />
          <Field
            label="Current Weight"
            name="currentWeight"
            type="text"
            autoComplete="off"
            component={CustomInput}
            inputStyles={{ width: '200px' }}
          />
          <Field
            label="Desired Weight"
            name="desiredWeight"
            type="text"
            autoComplete="off"
            component={CustomInput}
            inputStyles={{ width: '200px' }}
          />
          <Field
            label="Birthday"
            name="birthday"
            type="text"
            autoComplete="off"
            component={CustomInput}
            inputStyles={{ width: '200px' }}
          />
        </Form>
      </Formik>
            {/* <StyledDatepicker /> */}
            </>}
            { step === 2 &&
            <>
            <ParamsFormTitle>Get closer to your goals!</ParamsFormTitle> 
             <FormControl>
                <RadioWrap>
                    <RadioGroupWrap>
                    <FormLabel id="blood" sx={FormLabelStyling}>Blood</FormLabel>
                    <RadioGroup
                        aria-labelledby="blood"
                        name="blood"
                        value={blood}
                        onChange={handleChangeBlood}
                    >
                    <FormControlLabel value="1" sx={{mb: -1}}  control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                        
                      }}/>} label={
                        <Typography sx={{ fontSize: 14 }}>
                          1
                        </Typography>
                      }/>
                    <FormControlLabel value="2" sx={{mb: -1}} control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>} label={
                        <Typography sx={{ fontSize: 14 }}>
                          2
                        </Typography>
                      } />
                    <FormControlLabel value="3" sx={{mb: -1}} control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>} label={
                        <Typography sx={{ fontSize: 14 }}>
                          3
                        </Typography>
                      } />
                    <FormControlLabel value="4"  sx={{mb: -1}} control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>} label={
                        <Typography sx={{ fontSize: 14 }}>
                          4
                        </Typography>
                      } />
                    </RadioGroup>
                    </RadioGroupWrap>
                    
                    <RadioGroupWrap>
                    <FormLabel id="sex" sx={FormLabelStyling}>Sex</FormLabel>
                    <RadioGroup
                        aria-labelledby="sex"
                        name="sex"
                        value={sex}
                        onChange={handleChangeSex}
                    >
                        <FormControlLabel value="male" sx={{mb: -1}} control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>} label={
                        <Typography sx={{ fontSize: 14 }}>
                          Male
                        </Typography>
                      } />
                        <FormControlLabel value="female" sx={{mb: -1}} control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>} label={
                        <Typography sx={{ fontSize: 14 }}>
                          Female
                        </Typography>
                      } />

                    </RadioGroup>
                    </RadioGroupWrap>
                    
                </RadioWrap>
            

             <FormLabel id="level" sx={FormLabelStyling}>Level Activity:</FormLabel>
             <RadioGroup
                 aria-labelledby="level"
                 name="level"
                 value={level}
                 onChange={handleChangeLevel}
             >
                 <FormControlLabel value="sedentary" sx={{mb:0.2}} control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>}  label={
                        <Typography align='left' sx={{ fontSize: 14, lineHeight: 1.3}}>
                          Sedentary lifestyle (little or no physical activity)
                        </Typography>
                      } />
                 <FormControlLabel value="light" sx={{mb:0.6}} control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>} label={
                        <Typography align='left' sx={{ fontSize: 14, lineHeight: 1.3}}>
                          Light activity (light exercises/sports 1-3 days per week)
                        </Typography>
                      }/>
                 <FormControlLabel value="very" sx={{mb:0.6}} control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>} label={
                        <Typography align='left' sx={{ fontSize: 14, lineHeight: 1.3 }}>
                          Very active (intense exercises/sports 6-7 days per week)" 
                        </Typography>
                      } />
                 <FormControlLabel value="extremely" control={<Radio size="small" sx={{
                        color: 'rgb(239, 237, 232, 0.6)',
                        '&.Mui-checked': {
                          color: "#EF8964",
                        },
                      }}/>} label={
                        <Typography align='left' sx={{ fontSize: 14, lineHeight: 1.3}}>
                          Extremely active (very strenuous exercises/sports and physical work)
                        </Typography>
                      } />
             </RadioGroup>
            </FormControl>
            </>}

            { step === 3 && 
            <>
             <ParamsFormTitle>Dear User</ParamsFormTitle>
             <ParamsFormSubTitle>Thank you for filling in all the required data. We greatly appreciate your cooperation and commitment to a healthy lifestyle. The collected information will allow us to provide you with a more individual and personalized approach.</ParamsFormSubTitle>
            </>
            
            }
           
           { step > 1 && <Button variant="text" type="button" size="medium" sx={{mt: 2}} margin="normal" onClick={handleClickBack}>
                    Back
            </Button>}

            {step < 3 && <Button variant="text" type="button"   size="medium" sx={{mt: 2}} margin="normal" onClick={handleClickNext}>
                    Next
            </Button>}
            {step === 3 && <Button variant="text" type="submit" size="medium" sx={{mt: 2}} margin="normal">
                    Go
                </Button>}
            <StepWrap>
                <Step1 step={step}></Step1>
                <Step2 step={step}></Step2>
                <Step3 step={step}></Step3>
            </StepWrap>
            
            
        </Section>
        
       
    )
}






   // const TextFieldStyling = {
    //   mb: 2, 
    //   "& label": {
    //       color: 'rgb(239, 237, 232, 0.6)',
    //       fontSize: 14,
    //     },
    //     "& label.Mui-focused": {
    //       color: 'rgb(239, 237, 232, 0.6)'
    //     },
    //     "& input": {
    //       color: 'rgb(239, 237, 232, 0.6)'
    //     },
    //   '& .MuiOutlinedInput-root': {
    //   '& fieldset': {
    //     borderColor: '#E0E3E7',
    //   },
    //   '&:hover fieldset': {
    //     borderColor: '#b25613',
    //   },
    //   '&.Mui-focused fieldset': {
    //     borderColor: '#b25613',
    //   },
    // },
    // }
