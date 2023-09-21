

import styled from 'styled-components';



export const ParamsFormTitle = styled.h2`
  color: #EFEDE8;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const ParamsFormSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: rgb(239, 237, 232, 0.3);
  margin-bottom: 32px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 496px;
  }
`
export const GenderWrap = styled.div`
    
`

export const LevelWrap = styled.div`
`

export const BloodWrap = styled.div`
    margin-right: 64px;
`

export const RadioGroupWrap = styled.div`
margin-bottom: 24px;
display: flex;
`

export const InputWrap = styled.div`
display: flex;
`

export const FormWrap = styled.div`
    max-width: 335px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
    max-width: 527px;
  }
  
`


export const FieldWrap = styled.div`
      margin-bottom: 32px;
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


export const NextBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    color: #EFEDE8;
`

export const BackBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    color: rgb(239, 237, 232, 0.6);
   
`




export const BtnWrap = styled.div`
    display: flex;
`

export const MainBtnWrap = styled.div`
margin-right: 16px;`
