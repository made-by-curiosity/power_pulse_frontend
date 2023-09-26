// import { NavLink } from "react-router-dom"
import { NavLinkWrap, Link, NavWrap} from './ExercisesNav.styled';

export const ExercisesNav = () => {
  return (
      <NavWrap>
          <h1>Exercises</h1>
          <NavLinkWrap>
              <Link to="bodyPart">Body parts</Link>
              <Link to="target">Muscles</Link>
              <Link to="equipment">Equipment</Link>
          </NavLinkWrap>
      </NavWrap>
   
   
  );
};
