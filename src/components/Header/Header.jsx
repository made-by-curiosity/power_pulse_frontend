import { NavLink } from 'react-router-dom';
import { AppBar } from './Header.styled';
import { Container } from 'components/Container/Container';

export const Header = () => {
  return (
    <Container>
      <AppBar>
        <NavLink to="/welcome">Welcome page</NavLink>
        <NavLink to="/signin">SignIn page</NavLink>
        <NavLink to="/signup">SignUp page</NavLink>
        <NavLink to="/params">Params page</NavLink>
        <NavLink to="/profile">Profile page</NavLink>
        <NavLink to="/diary">Diary page</NavLink>
        <NavLink to="/exercises">Exercises page</NavLink>
        <NavLink to="/products">Products page</NavLink>
        <NavLink to="/notfound">Not Found page</NavLink>
      </AppBar>
    </Container>
  );
};
