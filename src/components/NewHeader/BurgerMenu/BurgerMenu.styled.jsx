import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BurgerLayout = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: 0;
`;

export const UserNav = styled.nav`
  z-index: 200;
  position: fixed;
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

export const BurgerLink = styled(NavLink)`
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
  &:active,
  &.active {
    border: 1px solid #efede8;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
