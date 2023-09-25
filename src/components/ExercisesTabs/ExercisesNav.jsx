// import { NavLink } from "react-router-dom"
import { NavLinkWrap, Link } from './ExercisesNav.styled';

export const ExercisesNav = () => {
  return (
    <NavLinkWrap>
      <Link to="bodyparts">BodyParts</Link>
      <Link to="muscles">Musculs</Link>
      <Link to="equipment">Equipments</Link>
    </NavLinkWrap>
  );
};
