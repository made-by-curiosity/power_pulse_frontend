import { Link } from "react-router-dom"
import { Container } from 'components/Container/Container';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { equipmentList } from "redux/auth/selectors";
import { getEquipment } from "redux/auth/operations";

import { CategoriesList, CardLink } from "./BodyPartsList.styled"

export const EquipmentsList = () => {
  const dispatch = useDispatch();

  useEffect ( () => {
    dispatch(getEquipment());
  }, [dispatch]);

  const equipment = useSelector(equipmentList);

    return (
      <Container>
           <CategoriesList>
              {equipment?.map(card => (
                <CardLink key={card._id}>
                  <li>{card.name}</li>
                </CardLink>
              ))}
            </CategoriesList>
      </Container>
       
        
    )
}