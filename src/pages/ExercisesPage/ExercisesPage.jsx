import { Container } from 'components/Container/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';



import { BodyPartsList } from 'components/ExercisesTabs/BodyPartsList';

import { getBodyParts } from 'redux/auth/operations';

const ExercisesPage = () => {
  const dispatch = useDispatch()


  useEffect ( () => {
    dispatch(getBodyParts());
  }, [dispatch]);



  
  return <Container>
            <BodyPartsList/>
        </Container>;
};

export default ExercisesPage;
