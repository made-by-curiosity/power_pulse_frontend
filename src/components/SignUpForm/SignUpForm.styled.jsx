import styled from '@emotion/styled';
import { Form } from 'formik';

export const RegisterContainer = styled.div`
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 116px;
  }
`;

export const RegisterForm = styled(Form)`
  max-width: 335px;
  margin-bottom: 12px;

  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    width: 364px;
  }
`;

export const Title = styled.h2``;
export const Text = styled.p`
  color: ${props => props.theme.colors.secondTextColor};
  margin: 20px 0;
  font-size: 14px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    margin: 24px 0;
    max-width: 496px;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const SecondText = styled.p`
  color: #efede899;
  font-size: 12px;
  line-height: 1.5;
`;

// export const BgImg = styled.img`
//   width: 446px;
//   height: 669px;
//   position: absolute;
//   bottom: -114%;
//   left: 0;
//   z-index: -1;
// `;
