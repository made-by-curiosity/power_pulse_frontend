import { NavLink } from 'react-router-dom';
import { HeaderLink, NavigationBar } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavigationBar>
      <NavLink to="/diary">
        <HeaderLink>Diary</HeaderLink>
      </NavLink>
      <NavLink to="/products">
        <HeaderLink>Products</HeaderLink>
      </NavLink>
      <NavLink to="/exercises">
        <HeaderLink>Exercises</HeaderLink>
      </NavLink>
    </NavigationBar>
  );
};
