// import { Link } from "react-router-dom"
import { Container } from 'components/Container/Container';

import { CategoriesList, CardLink } from './BodyPartsList.styled';

export const EquipmentsList = () => {
  const equipment = [];

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
  );
};
