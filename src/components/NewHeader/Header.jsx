import { NavLink } from 'react-router-dom';
import {
  AppBar,
  NavWrapper,
  FlexWrapper,
  FixedHeader,
  HeaderContainer,
} from './Header.styled';
import { Logo } from './Logo/Logo';
// import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { NavBar } from './NavBar/NavBar';
import { UserBar } from './UserBar/UserBar';

export const Header = ({ setMenuIsOpen }) => {
  // eslint-disable-next-line no-unused-vars
  const [IsLogedIn, setIsLogedIn] = useState(true);

  return (
    <AppBar>
      <FixedHeader>
        <HeaderContainer>
          <NavWrapper>
            <NavLink to="/welcome">
              <Logo />
            </NavLink>
            {IsLogedIn && (
              <FlexWrapper>
                <NavBar />
                <UserBar onBurgerButton={setMenuIsOpen} />
              </FlexWrapper>
            )}
          </NavWrapper>
        </HeaderContainer>
      </FixedHeader>
    </AppBar>
  );
};
