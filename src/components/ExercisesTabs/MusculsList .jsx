
import { Container } from 'components/Container/Container';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { musclesList } from "redux/auth/selectors";
import { getMuscles } from "redux/auth/operations";

import { CategoriesList, CardLink } from "./BodyPartsList.styled"


export const MusculsList = () => {

  const dispatch = useDispatch()


  useEffect ( () => {
    dispatch(getMuscles());
  }, [dispatch]);

 const muscles = useSelector(musclesList);

    return (
      <Container>
          <CategoriesList>
        {muscles?.map(card => (
          <CardLink key={card._id}>
            <li>{card.name}</li>
          </CardLink>
        ))}
      </CategoriesList>
      </Container>
        
    )
}