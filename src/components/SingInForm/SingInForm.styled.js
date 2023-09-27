import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ContainerSingIn = styled.div`
  max-width: 335px;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: 364px;
    margin-top: 60px;
  }

  @media (min-width: 1440px) {
    margin-top: 116px;
  }
`;

export const ContainerField = styled.div`
  margin-bottom: 30px;
`;

export const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  color: #efede84d;
  margin-bottom: 28px;
  margin-top: 14px;

  @media (min-width: 768px) {
    width: 496px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const BtnWrapper = styled.div`
  width: max-content;

  display: flex;
  flex-direction: column;

  gap: 10px;

  @media (min-width: 768px) {
  }
`;

export const TextBtn = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.12;
  color: #efede8;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TextSingUp = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.6);
`;

export const LinkSingUp = styled(Link)`
  font-family: Roboto;
  font-size: 12px;
  line-height: 150%;
  text-decoration-line: underline;
  margin-left: 5px;
  color: #efede8;
`;

export const DivSingUp = styled.div`
  display: flex;
  margin-top: 12px;

  @media (min-width: 768px) {
    margin-left: 7px;
  }
`;
