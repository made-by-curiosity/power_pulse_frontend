import styled from '@emotion/styled';
import bg_line from '../../assets/images/bg_img/bg_line.png';

export const TitleText = styled.h2`
  width: 335px;
  height: 120px;
  margin-top: 65px;
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px;
  letter-spacing: 0.38px;
  color: #efede8;

  /* background-image: url(${bg_line});
  background-repeat: no-repeat;
  background-position: left -5px top 43px;
  background-size: 98px 35px; */

  @media screen and (min-width: 768px) {
    width: 598px;
    height: 234px;
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
    /* background-position: left 80px bottom 449px; */
  }
`;

export const WelcomeBtns = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    gap: 20px;
    margin-top: 64px;
  }
`;

export const WelcomeTitle = styled.div`
  position: relative;
  /* background-image: url(${bg_line});
  background-repeat: no-repeat;
  background-position: left 0px bottom 607px; */
`;
