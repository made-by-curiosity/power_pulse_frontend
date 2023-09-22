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


export const Pages = styled.div`
  background-image: url(${mo_img });
  background-image: -webkit-image-set(
    url(${mo_img2}); 2x,
    url(${mo_img3}); 3x
  );
  background-repeat: no-repeat;
  background-position: bottom 0 right 0;
  margin: 0;
  display: block;
  width: 100%;
  height: auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 768px; 

    background-image: url(${ta_img});
    background-image: -webkit-image-set(
     url(${ta_img2}); 2x,
     url(${ta_img3}); 3x
    );
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;


    background-image: url(${bg_img});
    background-image: -webkit-image-set(
      url(${bg_img2}); 2x,
      url(${bg_img3}); 3x
    );
  }
`;

export const Blok = styled.div`
  width: 240px;
  margin: 0;
  padding: 250px 20px 250px 20px;
  background: #E6533C;
  

  @media screen and (min-width: 768px) {
    width: 420px;
    padding: 309px 32px 309px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 669px;
    padding: 221px 96px 221px 96px;
  }
`;



export const Title = styled.h2`
    margin-bottom: 14px;
    font-family: Roboto;
    font-size: 66px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0;
    letter-spacing: 0.66px;
    color: #EFEDE8;

    @media screen and (min-width: 768px) {
        margin-bottom: 28px;
        font-size: 160px;
        line-height: 0.93;
        letter-spacing: 1.6px;
    } 
`;

export const Text = styled.p`
    width: 200px;
    margin: 0;
    margin-bottom: 28px;
    color: #EFEDE8;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.28;

    @media screen and (min-width: 768px) {
        width: 356px;
        font-size: 16px;
        line-height: 1.5;
    }

    @media screen and (min-width: 1440px) {
        width: 477px;
    }
`;

export const Button = styled.button`
    width: 150px;
    padding: 12px 40px;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.12;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.30);
    background-color: #E6533C;
    color: #EFEDE8;
    cursor: pointer;

    @media screen and (min-width: 768px) {
        width: 209px;
        padding: 16px 60px;
        font-size: 20px;
        line-height: 1.0;
    }
    
`;




