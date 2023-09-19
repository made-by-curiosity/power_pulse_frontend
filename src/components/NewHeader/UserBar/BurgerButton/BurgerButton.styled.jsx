import styled from '@emotion/styled';

export const BurgerBtn = styled.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerBtnSvg = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
