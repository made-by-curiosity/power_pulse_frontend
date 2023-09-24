import styled from '@emotion/styled';

// import body_back from '../../assets/images/exercises_img';

import img from '../../assets/images/exercises_img/body_cardio.jpg';

import img2 from '../../assets/images/exercises_img/body_cardio@2x.jpg';

import img3 from '../../assets/images/exercises_img/body_cardio@3x.jpg';

export const ExerciseCardWrapper = styled.div`
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: linear-gradient(0deg, rgba(4, 4, 4, 0.50) 0%, rgba(4, 4, 4, 0.50) 100%); 
  background-repeat: no-repeat;
background-image: url(${img});
background-position: 50% 50%;
background-size: cover;

@media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${img2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${img3});
      }}
  
  @media screen and (min-width: 768px) {
    width: 224px;
    height: 206px;
  } 
   @media screen and (min-width: 1440px) {
    width: 237px;
    height: 206px;
  } 
`;
export const ExerciseDescription = styled.div`
  text-align: center;
  margin-top: 81px;
  margin-bottom: 81px;

  @media screen and (min-width: 768px) {
    margin-top: 77px;
  margin-bottom: 77px;
  }
`;
export const ExerciseTitle = styled.p`
  margin: 0;
  color: #efede8;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 768px) {
   font-size: 24px;
line-height: 32px;
  }
`;

export const ExerciseText = styled.p`
  margin-top: 2px;
  margin-bottom: 0;
  color: rgba(239, 237, 232, 0.4);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
