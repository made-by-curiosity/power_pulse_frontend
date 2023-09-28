import styled from 'styled-components';

export const ParamsWrapper = styled.div`
  margin-top: 30px;
  @media screen and (min-width: 768px) {
  }
`;

export const ParamsFormTitle = styled.h2`
  color: '#EFEDE8';
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ParamsFormSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: 'rgb(239, 237, 232, 0.3)';
  margin-bottom: 32px;
  line-height: 1.4;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    max-width: 496px;
  }
`;
export const GenderWrap = styled.div``;

export const LevelWrap = styled.div``;

export const BloodWrap = styled.div`
  margin-right: 64px;
`;

export const RadioGroupWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
`;

export const InputWrap = styled.div`
  display: flex;
`;

export const FormWrap = styled.div`
  max-width: 335px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    max-width: 527px;
  }
`;

export const FieldWrap = styled.div`
  margin-bottom: 32px;
`;

export const StepContainer = styled.div`
  width: 178px;
  display: flex;
  justify-content: space-around;
`;

export const StepWrap = styled.div`
  margin-top: 10px;
  padding-bottom: 20px;

  margin-top: ${props => {
    if (props.step === 2) {
      return '30px';
    }
  }};
  margin-top: ${props => {
    if (props.step === 3) {
      return '30px';
    }
  }};

  @media screen and (min-width: 768px) {
    margin-top: 40px;

    margin-top: ${props => {
      if (props.step === 2) {
        return '40px';
      }
    }};
    margin-top: ${props => {
      if (props.step === 3) {
        return '40px';
      }
    }};
  }

  @media screen and (min-width: 1440px) {
    margin-top: 40px;

    margin-top: ${props => {
      if (props.step === 2) {
        return '40px';
      }
    }};
    margin-top: ${props => {
      if (props.step === 3) {
        return '40px';
      }
    }};
  }
`;

// export const StepWrap = styled.div`
//   width: 178px;
//   display: flex;
//   justify-content: space-around;
//   margin-top: 343px;
//   padding-bottom: 20px;

//   margin-top: ${props => {
//     if (props.step === 2) {
//       return '159px';
//     }
//   }};
//   margin-top: ${props => {
//     if (props.step === 3) {
//       return '459px';
//     }
//   }};

//   @media screen and (min-width: 768px) {
//     margin-top: 439px;

//     margin-top: ${props => {
//       if (props.step === 2) {
//         return '283px';
//       }
//     }};
//     margin-top: ${props => {
//       if (props.step === 3) {
//         return '523px';
//       }
//     }};
//   }

//   @media screen and (min-width: 1440px) {
//     margin-top: 204px;

//     margin-top: ${props => {
//       if (props.step === 2) {
//         return '48px';
//       }
//     }};
//     margin-top: ${props => {
//       if (props.step === 3) {
//         return '288px';
//       }
//     }};
//   }
// `;

export const Step1 = styled.button`
  width: 50px;
  height: 4px;
  background-color: '#ef8964';
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Step2 = styled.button`
  width: 50px;
  height: 4px;
  background-color: '#303030';
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  background-color: ${props => {
    if (props.step > 1) {
      return props.theme.colors.paramsBgColor;
    }
  }};
`;

export const Step3 = styled.button`
  width: 50px;
  height: 4px;
  background-color: '#303030';
  border-radius: 10px;
  outline: none;
  border: none;
  cursor: pointer;

  background-color: ${props => {
    if (props.step === 3) {
      return props.theme.colors.paramsBgColor;
    }
  }};
`;

export const NextBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  color: #efede8;
`;

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: transparent;
  color: 'rgb(239, 237, 232, 0.6)';
`;

export const BtnWrap = styled.div`
  display: flex;
`;

export const MainBtnWrap = styled.div`
  margin-right: 16px;
`;

export const CaloriesBtnWrap = styled.div`
  position: absolute;
  top: -19px;
  right: -5px;

  top: ${props => {
    if (props.step === 2) {
      return '-32px';
    }
  }};
  right: ${props => {
    if (props.step === 2) {
      return '2px';
    }
  }};

  @media screen and (min-width: 768px) {
    top: 250px;
    top: ${props => {
      if (props.step === 2) {
        return '205px';
      }
    }};
    top: ${props => {
      if (props.step === 3) {
        return '235px';
      }
    }};
  }

  @media screen and (min-width: 1440px) {
    top: -93px;
    right: 130px;
    top: ${props => {
      if (props.step === 2) {
        return '-142px';
      }
    }};
    top: ${props => {
      if (props.step === 3) {
        return '-101px';
      }
    }};
  }
`;

export const TutorialBtnWrap = styled.div`
  position: absolute;
  top: -11px;
  right: -10px;

  top: ${props => {
    if (props.step === 2) {
      return '10px';
    }
  }};
  right: ${props => {
    if (props.step === 2) {
      return '-45px';
    }
  }};

  @media screen and (min-width: 768px) {
    top: -115px;
    top: ${props => {
      if (props.step === 2) {
        return '-155px';
      }
    }};
    top: ${props => {
      if (props.step === 3) {
        return '-140px';
      }
    }};
  }
`;
