// import { NavLink } from "react-router-dom"
import { NavLinkWrap, Link, NavWrap, FilterTitle, Title} from './ExercisesNav.styled';

import { useParams } from 'react-router-dom';



export const ExercisesNav = () => {
 

  const { filter } = useParams();


  return (
      <NavWrap>
        {filter ? <FilterTitle> {filter} </FilterTitle> : <Title> Exercises </Title>}

          <NavLinkWrap>
              <Link to="bodyPart">Body parts</Link>
              <Link to="target">Muscles</Link>
              <Link to="equipment">Equipment</Link>
          </NavLinkWrap>
      </NavWrap>
   
   
  );
};
