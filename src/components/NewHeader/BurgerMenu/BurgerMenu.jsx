import { NavLink } from 'react-router-dom';
import { UserNav } from './BurgerMenu.styled';
import { BurgerLink } from './BurgerMenu.styled';
import { BurgerCloseButton } from './BurgerCloseButton/BurgerCloseButton';
import { BurgerLogoutButton } from './BurgerLogutButton/BurgerLogoutButton';

export const BurgerMenu = ({ onBurgerButton }) => {
  return (
    <UserNav>
      <BurgerCloseButton onClick={onBurgerButton} />
      <NavLink to="/diary">
        <BurgerLink>Diary</BurgerLink>
      </NavLink>
      <NavLink to="/products">
        <BurgerLink>Products</BurgerLink>
      </NavLink>
      <NavLink to="/exercises">
        <BurgerLink>Exercises</BurgerLink>
      </NavLink>
      <BurgerLogoutButton />
    </UserNav>
  );
};
