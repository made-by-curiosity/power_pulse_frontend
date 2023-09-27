import styled from '@emotion/styled';

export const BurgerCloseBtn = styled.button`
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;

  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000000;

  @media screen and (min-width: 768px) {
    top: 26px;
    right: 32px;
  }
`;

export const BurgerCloseBtnSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #efede8;

  transition: opacity 200ms ease-out;

  &:hover,
  &:focus {
    opacity: 0.6;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
