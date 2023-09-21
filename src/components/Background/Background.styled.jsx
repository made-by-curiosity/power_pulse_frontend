import styled from '@emotion/styled';
import mo_img from '../../assets/images/mo-img/mo_main.jpg';
import mo_img2 from '../../assets/images/mo-img/mo_main@2x.jpg';
import mo_img3 from '../../assets/images/mo-img/mo_main@3x.jpg';
import ta_img from '../../assets/images/ta_img/ta_main.jpg';
import ta_img2 from '../../assets/images/ta_img/ta_main@2x.jpg';
import ta_img3 from '../../assets/images/ta_img/ta_main@3x.jpg';
import bg_img from '../../assets/images/bg_img/bg_main.jpg';
import bg_img2 from '../../assets/images/bg_img/bg_main@2x.jpg';
import bg_img3 from '../../assets/images/bg_img/bg_main@3x.jpg';


export const BgContainer = styled.div`
    background-image: url(${mo_img});
  

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    & {
      background-image: url(${mo_img2});
    }
  }
  @media (min-device-pixel-ratio: 3),
    (-webkit-min-device-pixel-ratio: 3),
    (min-resolution: 192dpi),
    (min-resolution: 3dppx) {
    & {
      background-image: url(${mo_img3});
    }
  }

  @media(min-width: 768px) {
    background-image: url(${ta_img});
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${ta_img2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${ta_img3});
      }
    }
  }
  @media(min-width: 1440px){
   background-image: url(${bg_img});
   @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background-image: url(${bg_img2});
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 192dpi),
      (min-resolution: 3dppx) {
      & {
        background-image: url(${bg_img3});
      }
    }
  }
`;

