// import { NavLink } from "react-router-dom"
import { NavLinkWrap, Link } from './ExercisesNav.styled';

export const ExercisesNav = () => {
  return (
    <NavLinkWrap>
      <Link to="/exercises">BodyParts</Link>
      <Link to="/exercises/muscles">Musculs</Link>
      <Link to="/exercises/equipment">Equipments</Link>
    </NavLinkWrap>
  );
};
