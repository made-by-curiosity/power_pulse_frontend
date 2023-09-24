import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavLinkWrap = styled.div`
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    padding-top: 100px;
    max-width: 1440px;
`;


export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: grey;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
