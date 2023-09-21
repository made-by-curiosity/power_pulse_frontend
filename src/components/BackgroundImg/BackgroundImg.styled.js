import styled from '@emotion/styled';

import img from '../../assets/images/bg_img/bg_main.jpg'

import img2 from '../../assets/images/bg_img/bg_main@2x.jpg'

import img3 from '../../assets/images/bg_img/bg_main@3x.jpg'

export const Wrapper = styled.div`
height: 812px;

background-size: 446px 669px;
background-position: bottom right;

background-repeat: no-repeat;
background-image: url(${img});


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

@media(min-width: 768px) {

background-size: 670px 768px;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
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
      }
}

@media(min-width: 1440px){
   background-size: 670px 800px;


   @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
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
      }
}
`
