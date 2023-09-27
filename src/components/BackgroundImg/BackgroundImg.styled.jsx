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
  min-height: 620px;

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
    url(${mo_img});

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
        url(${mo_img2});
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
        url(${mo_img3});
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
      url(${ta_img});

    background-repeat: no-repeat;
    background-size: 437px 893px;
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
          url(${ta_img2});
        background-repeat: no-repeat;
        background-size: 437px 893px;
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
          url(${ta_img3});
        background-repeat: no-repeat;
        background-size: 437px 893px;
        background-position: right bottom;
      }
    }
  }

  @media (min-width: 1440px) {
    width: 47%;

    background: linear-gradient(80deg, #040404 -2.45%, rgba(4, 4, 4, 0) 68.17%),
      url(${bg_img});

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
          url(${bg_img2});
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
          url(${bg_img3});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 30% top;
      }
    }
  }
`;
