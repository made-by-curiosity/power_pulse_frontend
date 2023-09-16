

import styled from 'styled-components';

export const FormData = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  
  
`;

export const Section = styled.section`
  width: 382px;
  /* text-align: center; */
  margin: 0 auto;
  padding: 20px;
`;

export const ParamsFormTitle = styled.h2`
  color: #EFEDE8;
  margin-bottom: 14px;
`

export const ParamsFormSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgb(239, 237, 232, 0.3);
  margin-bottom: 32px;
`


export const RadioWrap = styled.div`
display: flex;
`

export const InputWrap = styled.div`
display: flex;
`

export const StepWrap = styled.div`
  width: 178px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

`

export const Step1 = styled.div`
  width: 50px;
  height: 4px;
  background-color: #EF8964;
  border-radius: 10px;

`; 


export const Step2 = styled.div`
  width: 50px;
  height: 4px;
  background-color: #303030;
  border-radius: 10px;

  background-color: ${ props => 
   { if (props.step > 1) {return  "#EF8964"} }};
`; 

export const Step3 = styled.div`
  width: 50px;
  height: 4px;
  background-color: #303030;
  border-radius: 10px;

  background-color: ${ props => 
   { if (props.step === 3) {return  "#EF8964"} }};
`; 
