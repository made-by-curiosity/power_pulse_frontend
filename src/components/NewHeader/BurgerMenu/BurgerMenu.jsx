import PortalReactDOM from 'react-dom';
import { BurgerLayout, UserNav } from './BurgerMenu.styled';
import { BurgerLink } from './BurgerMenu.styled';
import { BurgerCloseButton } from './BurgerCloseButton/BurgerCloseButton';
import { BurgerLogoutButton } from './BurgerLogutButton/BurgerLogoutButton';
import { useEffect } from 'react';

export const BurgerMenu = ({ closeMenu }) => {
  const scrollY = window.scrollY;

  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        closeMenu();
      }
    };
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollY}px`;
    window.addEventListener('keydown', close);
    return () => {
      window.removeEventListener('keydown', close);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    };
  }, [closeMenu, scrollY]);

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
