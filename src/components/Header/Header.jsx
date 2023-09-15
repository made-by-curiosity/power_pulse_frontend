import { NavLink } from 'react-router-dom';
import { AppBar, NavWrapper } from './Header.styled';
import { Container } from 'components/Container/Container';

export const Header = () => {
  return (
    <AppBar>
      <Container>
        <NavWrapper>
          <NavLink to="/welcome">Welcome page</NavLink>
          <NavLink to="/signin">SignIn page</NavLink>
          <NavLink to="/signup">SignUp page</NavLink>
          <NavLink to="/params">Params page</NavLink>
          <NavLink to="/profile">Profile page</NavLink>
          <NavLink to="/diary">Diary page</NavLink>
          <NavLink to="/exercises">Exercises page</NavLink>
          <NavLink to="/products">Products page</NavLink>
          <NavLink to="/notfound">Not Found page</NavLink>
        </NavWrapper>
      </Container>
    </AppBar>
  );
};
