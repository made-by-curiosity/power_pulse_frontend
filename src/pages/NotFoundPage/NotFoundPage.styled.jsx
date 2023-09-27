import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  padding-top: 133px;
`;

export const Title = styled.h2`
  margin-bottom: 14px;
  font-family: Roboto;
  font-size: 66px;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.66px;
  color: ${props => props.theme.colors.primaryTitleColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 160px;
    line-height: 0.93;
    letter-spacing: 1.6px;
  }
`;

export const Text = styled.p`
  width: 200px;
  margin: 0;
  margin-bottom: 28px;
  color: ${props => props.theme.colors.primaryTitleColor};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 477px;
  }
`;
