import { NavLink } from 'react-router-dom';
import { UserNav } from './Menu.styled';

export const Menu = () => {
  return (
    <UserNav>
      <NavLink to="/diary">Diary</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/exercises">Exercises</NavLink>
    </UserNav>
  );
};
