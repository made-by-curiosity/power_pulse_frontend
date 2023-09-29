import styled from '@emotion/styled';

export const TitleText = styled.h2`
  max-width: 335px;
  margin-top: 65px;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.38px;
  color: ${props => props.theme.colors.primaryTitleColor};

  @media screen and (min-width: 768px) {
    max-width: 598px;
    font-size: 70px;
    font-style: normal;
    font-weight: 500;
    line-height: 78px;
    letter-spacing: 0.7px;
    margin-top: 105px;
    background-position: left -16px bottom 84px;
    background-size: auto auto;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 116px;
  }
`;

export const WelcomeBtns = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 40px;

  @media screen and (min-width: 375px) {
    gap: 14px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-top: 64px;
  }
`;

export const WelcomeTitle = styled.div`
  position: relative;
`;
