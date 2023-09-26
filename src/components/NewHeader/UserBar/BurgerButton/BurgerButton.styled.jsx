import styled from '@emotion/styled';

export const BurgerBtn = styled.button`
  cursor: pointer;
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

  stroke: #e6533c;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
