import styled from '@emotion/styled';

export const Pages = styled.div`
    position: relative;
    display: flex;
    background-color: black;

    
    @media screen and (min-width: 375px) {
        width: 375px;
    }
            
    @media screen and (min-width: 768px) {
        width: 768px;
    }
            
    @media screen and (min-width: 1440px) {
        width: 1440px;
    }
`;

export const Blok = styled.div`
    width: 240px;
    margin: 0;
    padding: 24px 20px 250px 20px;
    background: #E6533C;
    z-index: 1;

    @media screen and (min-width: 768px) {
        width: 420px;
        padding: 24px 32px 309px 32px;
    }

    @media screen and (min-width: 1440px) {
        width: 669px;
        margin-right: 101px;
        padding: 32px 96px 221px 96px;
    }
`;

export const Logo = styled.a`
    text-decoration: none; 
    display: inline-flex;
    align-items: center;
    gap: 8px;
`;

export const Title = styled.h2`
    margin-top: 213px;
    margin-bottom: 14px;
    font-family: Roboto;
    font-size: 66px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.0;
    letter-spacing: 0.66px;
    color: #EFEDE8;

    @media screen and (min-width: 768px) {
        margin-top: 260px;
        margin-bottom: 28px;
        line-height: 0.93;
        letter-spacing: 1.6px;
    }
    @media screen and (min-width: 1440px) {
        margin-top: 172px;
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
    width: 147px;
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

    @media screen and (min-width: 768px) {
        width: 204px;
        padding: 16px 60px;
        font-size: 20px;
        line-height: 1.0;
    }
    
`;

export const Foto = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
`
export const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
`