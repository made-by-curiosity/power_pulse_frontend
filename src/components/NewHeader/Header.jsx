import { NavLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  NavWrapper,
  FlexWrapper,
  FixedHeader,
  HeaderContainer,
} from './Header.styled';
import { Logo } from './Logo/Logo';
import { NavBar } from './NavBar/NavBar';
import { UserBar } from './UserBar/UserBar';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Header = ({ setMenuIsOpen }) => {
  const location = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const is404 = location.pathname === '/404';
  const isParamsPage = location.pathname === '/params';

  const showHeader = !!isLoggedIn && !is404 && !isParamsPage;

  return (
    <AppBar showHeader={showHeader}>
      <FixedHeader showHeader={showHeader}>
        <HeaderContainer showHeader={showHeader}>
          <NavWrapper>
            <NavLink to="/welcome">
              <Logo is404={is404} />
            </NavLink>
            {showHeader && (
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
