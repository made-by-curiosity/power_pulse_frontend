import styled from '@emotion/styled';

import img from '../../assets/images/exercises_img/body_cardio.jpg';

import img2 from '../../assets/images/exercises_img/body_cardio@2x.jpg';

import img3 from '../../assets/images/exercises_img/body_cardio@3x.jpg';

export const ExerciseCardWrapper = styled.div`
  max-width: 335px;
  height: 206px;
  border-radius: 12px;
  border: ${props => props.theme.colors.todoBorder};

  background-repeat: no-repeat;
  background-image: ${props => props.theme.colors.cardGradient},
    url(${props => props.photo || img});

  background-position: 50% 50%;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: ${props => props.theme.colors.cardGradient},
        url(${props => props.photo || img2});
    }
  }
  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 3dppx) {
    & {
      background-image: ${props => props.theme.colors.cardGradient},
        url(${props => props.photo || img3});
    }
  }

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
export const ExerciseTitle = styled.div`
  margin: 0;
  color: ${props => props.theme.colors.primaryTitleColor};
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
  color: ${props => props.theme.colors.textSecondColor};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
