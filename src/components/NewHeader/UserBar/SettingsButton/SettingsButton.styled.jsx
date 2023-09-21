import styled from '@emotion/styled';

export const SettingsBtnSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: #efede84d;

  transition: stroke linear 200ms;

  &:hover,
  &:active {
    stroke: #efede8;
  }

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
