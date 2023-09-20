import styled from '@emotion/styled';

import img from '../../assets/images/bg_img/bg_main.jpg';
import img2 from '../../assets/images/bg_img/bg_main@2x.jpg';
import img3 from '../../assets/images/bg_img/bg_main@3x.jpg';

export const Wrapper = styled.div`
  //   max-width: 446px;
  //   height: 669px;

  //   background-position-x: 77px;
  //   background-size: contain;
  //   background-position-y: 150%;
  height: 812px;
  min-width: 375px;
  background-position-x: 77px;
  background-size: 446px 669px;
  background-position-y: 212px;

  background-repeat: no-repeat;
  background-image: linear-gradient(
      168deg,
      #040404 14.75%,
      rgba(4, 4, 4, 0) 52.97%
    ),
    linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%), url(${img});

  @media (min-width: 768px) {
    background-image: linear-gradient(
        170deg,
        #040404 3.66%,
        rgba(4, 4, 4, 0) 19.15%
      ),
      linear-gradient(73deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
      url(${img2});
    min-width: 768px;
    height: 1024px;
    background-position-x: 331px;
    background-size: 670px 1005px;
    background-position-y: 80px;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    height: 800px;
    background-size: 670px 800px;
    background-image: linear-gradient(
        80deg,
        #040404 -2.45%,
        rgba(4, 4, 4, 0) 68.17%
      ),
      url(${img3});
    background-position: right;
  }
`;
