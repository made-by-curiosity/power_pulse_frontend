import styled from '@emotion/styled';

import mo_img_main from '../../assets/images/mo-img/mo_main.jpg';
import mo_img2_main from '../../assets/images/mo-img/mo_main@2x.jpg';
import mo_img3_main from '../../assets/images/mo-img/mo_main@3x.jpg';
import ta_img_main from '../../assets/images/ta_img/ta_main.jpg';
import ta_img2_main from '../../assets/images/ta_img/ta_main@2x.jpg';
import ta_img3_main from '../../assets/images/ta_img/ta_main@3x.jpg';
import bg_img_main from '../../assets/images/bg_img/bg_main.jpg';
import bg_img2_main from '../../assets/images/bg_img/bg_main@2x.jpg';
import bg_img3_main from '../../assets/images/bg_img/bg_main@3x.jpg';

import mo_img_step_1 from '../../assets/images/mo-img/mo_users.jpg';
import mo_img2_step_1 from '../../assets/images/mo-img/mo_users@2x.jpg';
import mo_img3_step_1 from '../../assets/images/mo-img/mo_users@3x.jpg';
import ta_img_step_1 from '../../assets/images/ta_img/ta_users.jpg';
import ta_img2_step_1 from '../../assets/images/ta_img/ta_users@2x.jpg';
import ta_img3_step_1 from '../../assets/images/ta_img/ta_users@3x.jpg';
import bg_img_step_1 from '../../assets/images/bg_img/bg_users.jpg';
import bg_img2_step_1 from '../../assets/images/bg_img/bg_users@2x.jpg';
import bg_img3_step_1 from '../../assets/images/bg_img/bg_users@3x.jpg';

import mo_img_step_2 from '../../assets/images/mo-img/mo_hours.jpg';
import mo_img2_step_2 from '../../assets/images/mo-img/mo_hours@2x.jpg';
import mo_img3_step_2 from '../../assets/images/mo-img/mo_hours@3x.jpg';
import ta_img_step_2 from '../../assets/images/ta_img/ta_hours.jpg';
import ta_img2_step_2 from '../../assets/images/ta_img/ta_hours@2x.jpg';
import ta_img3_step_2 from '../../assets/images/ta_img/ta_hours@3x.jpg';
import bg_img_step_2 from '../../assets/images/bg_img/bg_hours.jpg';
import bg_img2_step_2 from '../../assets/images/bg_img/bg_hours@2x.jpg';
import bg_img3_step_2 from '../../assets/images/bg_img/bg_hours@3x.jpg';

import mo_img_step_3 from '../../assets/images/mo-img/mo_ex.jpg';
import mo_img2_step_3 from '../../assets/images/mo-img/mo_ex@2x.jpg';
import mo_img3_step_3 from '../../assets/images/mo-img/mo_ex@3x.jpg';
import ta_img_step_3 from '../../assets/images/ta_img/ta_ex.jpg';
import ta_img2_step_3 from '../../assets/images/ta_img/ta_ex@2x.jpg';
import ta_img3_step_3 from '../../assets/images/ta_img/ta_ex@3x.jpg';
import bg_img_step_3 from '../../assets/images/bg_img/bg_ex.jpg';
import bg_img2_step_3 from '../../assets/images/bg_img/bg_ex@2x.jpg';
import bg_img3_step_3 from '../../assets/images/bg_img/bg_ex@3x.jpg';

const getBgPhotos = step => {
  switch (step) {
    case 1:
      return {
        mo_img: mo_img_step_1,
        mo_img2: mo_img2_step_1,
        mo_img3: mo_img3_step_1,
        ta_img: ta_img_step_1,
        ta_img2: ta_img2_step_1,
        ta_img3: ta_img3_step_1,
        bg_img: bg_img_step_1,
        bg_img2: bg_img2_step_1,
        bg_img3: bg_img3_step_1,
      };
    case 2:
      return {
        mo_img: mo_img_step_2,
        mo_img2: mo_img2_step_2,
        mo_img3: mo_img3_step_2,
        ta_img: ta_img_step_2,
        ta_img2: ta_img2_step_2,
        ta_img3: ta_img3_step_2,
        bg_img: bg_img_step_2,
        bg_img2: bg_img2_step_2,
        bg_img3: bg_img3_step_2,
      };
    case 3:
      return {
        mo_img: mo_img_step_3,
        mo_img2: mo_img2_step_3,
        mo_img3: mo_img3_step_3,
        ta_img: ta_img_step_3,
        ta_img2: ta_img2_step_3,
        ta_img3: ta_img3_step_3,
        bg_img: bg_img_step_3,
        bg_img2: bg_img2_step_3,
        bg_img3: bg_img3_step_3,
      };

    default:
      return {
        mo_img: mo_img_main,
        mo_img2: mo_img2_main,
        mo_img3: mo_img3_main,
        ta_img: ta_img_main,
        ta_img2: ta_img2_main,
        ta_img3: ta_img3_main,
        bg_img: bg_img_main,
        bg_img2: bg_img2_main,
        bg_img3: bg_img3_main,
      };
  }
};

//     url(${props => getBgPhotos(props.step).mo_img});

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const BgContainer = styled.div`
  position: absolute;
  z-index: -5;
  width: 100%;
  height: 100vh;
  min-height: 640px;

  display: flex;
  justify-content: ${props => (props.notFound ? 'space-between' : 'right')};

  @media (min-width: 768px) {
    min-height: 810px;
  }

  @media (min-width: 1440px) {
    min-height: 800px;
    gap: 101px;
  }
`;

export const NotFoundContentBackground = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.backgroundContentColor};

  z-index: -4;

  @media (min-width: 375px) {
    width: 64%;
  }

  @media (min-width: 768px) {
    width: 55%;
  }
  @media (min-width: 1440px) {
    width: 47%;
  }
`;

export const BgImage = styled.div`
  width: ${props => (props.notFound ? '0%' : '80%')};

  background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    url(${props => getBgPhotos(props.step).mo_img});

  background-size: 268px 571px;
  background-repeat: no-repeat;
  background-position: right bottom;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${props => getBgPhotos(props.step).mo_img2});
      background-repeat: no-repeat;
      background-size: 268px 571px;
      background-position: right bottom;
    }
  }
  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 3dppx) {
    & {
      background: linear-gradient(
          80deg,
          #040404 -2.45%,
          rgba(4, 4, 4, 0) 68.17%
        ),
        url(${props => getBgPhotos(props.step).mo_img3});
      background-repeat: no-repeat;
      background-size: 268px 571px;
      background-position: right bottom;
    }
  }

  @media (min-width: 375px) {
    width: ${props => (props.notFound ? '36%' : '90%')};
  }

  @media (min-width: 768px) {
    width: ${props => (props.notFound ? '45%' : '70%')};

    background: linear-gradient(170deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${props => getBgPhotos(props.step).ta_img});

    background-repeat: no-repeat;
    background-size: ${props => (props.step ? '488px 835px' : '437px 893px')};
    background-position: right bottom;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background: linear-gradient(
            170deg,
            #040404 3.66%,
            rgba(4, 4, 4, 0) 19.15%
          ),
          linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
          url(${props => getBgPhotos(props.step).ta_img2});
        background-repeat: no-repeat;
        background-size: ${props =>
          props.step ? '488px 835px' : '437px 893px'};
        background-position: right bottom;
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 3dppx) {
      & {
        background: linear-gradient(
            170deg,
            #040404 3.66%,
            rgba(4, 4, 4, 0) 19.15%
          ),
          linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
          url(${props => getBgPhotos(props.step).ta_img3});
        background-repeat: no-repeat;
        background-size: ${props =>
          props.step ? '488px 835px' : '437px 893px'};
        background-position: right bottom;
      }
    }
  }

  @media (min-width: 1440px) {
    width: 47%;

    background: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      url(${props => getBgPhotos(props.step).bg_img});

    background-repeat: no-repeat;
    background-size: cover;
    background-position: 30% top;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background: linear-gradient(
            80deg,
            #040404 -2.45%,
            rgba(4, 4, 4, 0) 68.17%
          ),
          url(${props => getBgPhotos(props.step).bg_img2});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 30% top;
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 3dppx) {
      & {
        background: linear-gradient(
            80deg,
            #040404 -2.45%,
            rgba(4, 4, 4, 0) 68.17%
          ),
          url(${props => getBgPhotos(props.step).bg_img3});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 30% top;
      }
    }
  }
`;
