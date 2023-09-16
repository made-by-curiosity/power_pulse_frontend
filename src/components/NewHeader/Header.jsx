import { Link, NavLink } from 'react-router-dom';
import { AppBar, NavWrapper, UserBar } from './Header.styled';
import { Container } from 'components/Container/Container';
import { Logo } from './Logo/Logo';
import { SettingButton } from './SettingsButton/SettingsButton';
import { UserButton } from './UserButton/UserButton';

export const Header = () => {
  return (
    <AppBar>
      <Container>
        <NavWrapper>
          <NavLink to="/welcome">
            <Logo />
          </NavLink>
          <UserBar>
            <Link>
              <SettingButton />
            </Link>
            <Link>
              <UserButton />
            </Link>
          </UserBar>
        </NavWrapper>
      </Container>
    </AppBar>
  );
};
