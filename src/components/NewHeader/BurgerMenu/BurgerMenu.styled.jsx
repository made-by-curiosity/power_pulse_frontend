import styled from '@emotion/styled';

export const UserNav = styled.nav`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  width: 200px;
  height: 100%;

  background: #e6533c;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerLink = styled.div`
  display: flex;
  padding: 10px 27px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 14px;
  line-height: 18px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: border linear 200ms;

  color: #efede8;

  &:hover,
  &:active {
    border: 1px solid #efede8;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
