import PortalReactDOM from 'react-dom';
import { BurgerLayout, UserNav } from './BurgerMenu.styled';
import { BurgerLink } from './BurgerMenu.styled';
import { BurgerCloseButton } from './BurgerCloseButton/BurgerCloseButton';
import { BurgerLogoutButton } from './BurgerLogutButton/BurgerLogoutButton';
import { useEffect } from 'react';

export const BurgerMenu = ({ onBurgerButton }) => {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        onBurgerButton();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onBurgerButton]);

  return PortalReactDOM.createPortal(
    <>
      <BurgerLayout onClick={onBurgerButton} />
      <UserNav>
        <BurgerCloseButton onClick={onBurgerButton} />
        <BurgerLink to="/diary">Diary</BurgerLink>
        <BurgerLink to="/products">Products</BurgerLink>
        <BurgerLink to="/exercises">Exercises</BurgerLink>
        <BurgerLogoutButton />
      </UserNav>
    </>,
    document.querySelector('#burger-menu-root')
  );
};
