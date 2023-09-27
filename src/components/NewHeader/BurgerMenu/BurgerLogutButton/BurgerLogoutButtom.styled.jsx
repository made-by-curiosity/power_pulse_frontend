import styled from '@emotion/styled';

export const BurgerLogoutBtn = styled.a`
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  left: 20px;

  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  @media screen and (min-width: 768px) {
    bottom: 32px;
    left: 32px;

    font-size: 16px;
    line-height: 24px;
  }
`;