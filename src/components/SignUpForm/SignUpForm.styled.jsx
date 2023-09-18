import styled from '@emotion/styled';
import { Form } from 'formik';

export const RegisterContainer = styled.div`
  padding-top: 90px;
  @media screen and (min-width: 768px) {
    padding-top: 140px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 151px;
  }
`;

export const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    max-width: 364px;
  }
`;

export const Title = styled.h2``;
export const Text = styled.p`
  margin: 14px 0;
  @media screen and (min-width: 768px) {
    margin: 16px 0;
    max-width: 496px;
  }
`;
