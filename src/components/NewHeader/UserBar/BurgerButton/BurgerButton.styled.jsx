import styled from '@emotion/styled';

export const BurgerBtn = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.burgerBgColor};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerBtnSvg = styled.svg`
  width: 24px;
  height: 24px;

  stroke: ${props => props.theme.colors.burgerSvgColor};

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
