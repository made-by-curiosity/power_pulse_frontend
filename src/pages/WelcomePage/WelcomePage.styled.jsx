import styled from '@emotion/styled';
import bg_line from '../../assets/images/bg_img/bg_line.png';

export const TitleText = styled.h2`
width: 598px;
height: 234px;
  font-size: 38px;
font-style: normal;
font-weight: 500;
line-height: 40px;
letter-spacing: 0.38px;
color: #efede8;
margin-bottom: 52px;
/* 
  padding-left: 20px;
  padding-bottom: 366px; */
background-image: url(${bg_line});
background-repeat: no-repeat;
background-position: left 0px bottom 607px;

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

  /* margin-left: 96px; */
margin-bottom: 366px;
 } 

`; 


// export const WelcomeSection = styled.div`
// width: 230px;
// height: 800px; 

//  @media screen and (min-width: 768px) {
// width: 768px;
// height: 230px; 
//  }
//  @media screen and (min-width: 1440px) {
//   width:1440px;
// height: 800px; 
//  }

// `

 export const WelcomeBtns = styled.div`
    position: absolute;
     gap: 14px;
  bottom: 483px;
  left: 20px;
  display: flex;
  gap: 14px;

  @media screen and (min-width: 768px) {
bottom: 497px;
  left: 32px;
  gap: 20px;
 }
 @media screen and (min-width: 1440px) {
  bottom: 246px;
  left: 96px;
  gap: 20px;
 }
`;

export const WelcomeTitle = styled.div`
  position: relative;
` ;

// export const MainButton = styled.button`
//   margin-right: 14px;
//   @media screen and (min-width: 768px) {
// margin-bottom: 0px;
// margin-right:20px;
//  }
//  @media screen and (min-width: 1440px) {
  
//  }
// `
