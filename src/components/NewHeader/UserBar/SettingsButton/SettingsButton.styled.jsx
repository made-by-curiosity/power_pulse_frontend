import styled from '@emotion/styled';

export const SettingsBtnSvg = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.colors.svgSettingsBtn};

  transition: stroke linear 200ms;

  &:hover,
  &:active {
    stroke: ${props => props.theme.colors.primaryTitleColor};
  }

  @media screen and (min-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;
