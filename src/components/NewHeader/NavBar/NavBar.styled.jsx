import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationBar = styled.nav`
  display: none;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;

  font-size: 14px;

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

export const HeaderLink = styled(NavLink)`
  display: flex;
  padding: 10px 27px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  line-height: 22px;

  border-radius: 12px;
  border: ${props => props.theme.colors.todoBorder};

  color: ${props => props.theme.colors.primaryTitleColor};
  transition: background linear 200ms, border linear 200ms;

  &:hover,
  &:active,
  &.active {
    background: ${props => props.theme.colors.navBarBgHover};
    border: ${props => props.theme.colors.navBarHoverBorder};
  }
`;
