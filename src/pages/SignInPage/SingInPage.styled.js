import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: column;
  width: 335px;


  @media (min-width: 768px) {
    margin-left: 32px;
    width: 496px;
  }

  @media (min-width: 1440px) {
    margin-left: 96px;
  }
`;

export const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  color: #efede84d;
  margin-bottom: 28px;

  @media (min-width: 768px) {
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const Button = styled.button`
  display: grid;
  width: 130px;
  border-radius: 12px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  grid-gap: 10px;
  margin-top: 28px;
  
  
  background-color: #e6533c;
  


  @media (min-width: 768px) {
  width: 182px;
  font-size: 20px;

  }

`;

export const TextBtn = styled.span`

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.12;
  color:#EFEDE8;

  @media (min-width: 768px) {
  font-size: 20px;
  }
`
