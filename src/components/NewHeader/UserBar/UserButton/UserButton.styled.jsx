import styled from '@emotion/styled';

export const AvatarContainer = styled.div`
  width: 37px;
  height: 37px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 2px solid #e6533c;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const UserBtnSvg = styled.svg`
  width: 21px;
  height: 21px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
