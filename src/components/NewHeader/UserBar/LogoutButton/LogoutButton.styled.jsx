import styled from '@emotion/styled';

export const LogoutBtn = styled.a`
  display: none;
  align-items: center;
  gap: 8px;

  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 0;

  stroke: ${props => props.theme.colors.backgroundContentColor};
  /* transition: color linear 200ms, stroke linear 200ms; */
  transition: transform linear 200ms;

  &:hover,
  &:active {
    transform: scale(1.05);

    /* stroke: #efede8; */
    /* color: #e6533c; */
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const LogoutBtnSvg = styled.svg`
  width: 20px;
  height: 20px;
  stroke: inherit;
`;
