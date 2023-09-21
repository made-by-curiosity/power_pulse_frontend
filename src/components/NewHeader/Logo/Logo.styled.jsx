import styled from '@emotion/styled';

export const LogoWrapper = styled.div`
  max-height: 13px;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-height: 17px;
  }
`;

export const LogoSvg = styled.svg`
  width: 126px;
  height: 13px;

  @media screen and (min-width: 768px) {
    width: 152px;
    height: 17px;
  }
`;
