import styled from '@emotion/styled';

 export const WelcomeBtns = styled.div`
    position: absolute;
  top: 498px;
  left: 96px;
  display: flex;
  margin-bottom: 246px;
  @media screen and (min-width: 768px) {
top: 498px;
  left: 96px;
 }
 @media screen and (min-width: 1440px) {
  top: 498px;
  left: 96px;
 }
`;

export const WelcomeTitle = styled.div`
  position: relative;
` ;

export const TitleText = styled.h2`
  font-size: 38px;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: 0.38px;
color: #efede8;
margin-left: 20px;
margin-bottom: 52px;

/* 
  padding-left: 20px;
  padding-bottom: 366px; */
background-image: url("../img/bg_img/line.png");
  background-repeat: no-repeat;
  background-position: left 11px bottom 607px;

  @media screen and (min-width: 768px) {
font-size: 70px;
  font-style: normal;
  font-weight: 500;
  line-height: 78px;
  letter-spacing: 0.7px;
  margin-left: 32px;
margin-bottom: 64px;
 background-position: left 16px bottom 684px;
  }

 @media screen and (min-width: 1440px) {
  background-position: left 80px bottom 449px;

  margin-left: 96px;
margin-bottom: 366px;
 } 

`; 
