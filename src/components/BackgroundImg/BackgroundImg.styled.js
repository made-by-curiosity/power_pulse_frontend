import styled from '@emotion/styled';

import img from '../../assets/images/bg_img/bg_main.jpg'

export const Wrapper = styled.div`
height: 812px;

     background-position-x: 90px;
    background-size: 446px 669px;
    background-position-y: 212px;

background-repeat: no-repeat;
background-image: url(${img});


@media(min-width: 768px) {
height: 768px;
background-position-x: 475px;
    background-size: 446px 669px;
    background-position-y: 118px;
}

@media(min-width: 1440px){
    background-position: right;
   background-size: 670px 800px;
}
`
