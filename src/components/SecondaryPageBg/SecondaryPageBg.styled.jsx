import styled from '@emotion/styled';

import bg_img_page_1 from '../../assets/images/ta_img/ta_main.jpg';
import bg_img2_page_1 from '../../assets/images/ta_img/ta_main@2x.jpg';
import bg_img3_page_1 from '../../assets/images/ta_img/ta_main@3x.jpg';

import bg_img_page_2 from '../../assets/images/bg_img/bg_eating.jpg';
import bg_img2_page_2 from '../../assets/images/bg_img/bg_eating@2x.jpg';
import bg_img3_page_2 from '../../assets/images/bg_img/bg_eating@3x.jpg';

const getBgPhotos = page => {
  switch (page) {
    case 'products':
      return {
        bg_img: bg_img_page_2,
        bg_img2: bg_img2_page_2,
        bg_img3: bg_img3_page_2,
      };
    default:
      return {
        bg_img: bg_img_page_1,
        bg_img2: bg_img2_page_1,
        bg_img3: bg_img3_page_1,
      };
  }
};

export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    height: 100vh;
    width: 100%;
    position: relative;
  }
`;

export const BgContainer = styled.div`
  @media (min-width: 1440px) {
    width: 100%;
    height: 100vh;
    min-height: 780px;
    ${props => (!props.isFilter ? 'min-height: 850px;' : '')}

    position: absolute;
    z-index: -5;

    display: flex;
    justify-content: right;
    gap: 101px;
  }
`;

export const BgImage = styled.div`
  ${props => (props.isFilter ? 'display: none;' : '')}
  @media (min-width: 1440px) {
    width: 30%;
    ${props => (!props.isFilter ? 'width: 35%;' : '')}

    background: linear-gradient(89deg, #040404 1.1%, rgba(4, 4, 4, 0) 70.79%),
      url(${props => getBgPhotos(props.page).bg_img});

    background-size: cover;
    background-repeat: no-repeat;
    background-position: right top;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      & {
        background: linear-gradient(
            89deg,
            #040404 1.1%,
            rgba(4, 4, 4, 0) 70.79%
          ),
          url(${props => getBgPhotos(props.page).bg_img2});

        background-size: cover;
        background-repeat: no-repeat;
        background-position: right bottom;
      }
    }
    @media (min-device-pixel-ratio: 3),
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 3dppx) {
      & {
        background: linear-gradient(
            89deg,
            #040404 1.1%,
            rgba(4, 4, 4, 0) 70.79%
          ),
          url(${props => getBgPhotos(props.page).bg_img3});

        background-size: cover;
        background-repeat: no-repeat;
        background-position: right bottom;
      }
    }
  }
`;
