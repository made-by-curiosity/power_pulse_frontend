import PortalReactDOM from 'react-dom';
import { BurgerLayout, UserNav } from './BurgerMenu.styled';
import { BurgerLink } from './BurgerMenu.styled';
import { BurgerCloseButton } from './BurgerCloseButton/BurgerCloseButton';
import { BurgerLogoutButton } from './BurgerLogutButton/BurgerLogoutButton';
import { useEffect } from 'react';

export const BurgerMenu = ({ closeMenu }) => {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [closeMenu]);

  return PortalReactDOM.createPortal(
    <>
      <BurgerLayout onClick={closeMenu} />
      <UserNav>
        <BurgerCloseButton onClick={closeMenu} />
        <BurgerLink onClick={closeMenu} to="/diary">
          Diary
        </BurgerLink>
        <BurgerLink onClick={closeMenu} to="/products">
          Products
        </BurgerLink>
        <BurgerLink onClick={closeMenu} to="/exercises">
          Exercises
        </BurgerLink>
        <BurgerLogoutButton />
      </UserNav>
    </>,
    document.querySelector('#burger-menu-root')
  );
};
