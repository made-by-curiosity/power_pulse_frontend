import { Container } from 'components/Container/Container';

import { CategoriesList, CardLink } from './BodyPartsList.styled';

export const MusculsList = () => {
  const muscles = [];

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
  );
};
