import { HeaderLink, NavigationBar } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavigationBar>
      <HeaderLink to="/diary">Diary</HeaderLink>
      <HeaderLink to="/products">Products</HeaderLink>
      <HeaderLink to="/exercises">Exercises</HeaderLink>
    </NavigationBar>
  );
};
