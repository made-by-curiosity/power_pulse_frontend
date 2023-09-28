import { Container } from 'components/Container/Container';
import { ExercisesNav } from 'components/ExercisesNav/ExercisesNav';
import { Loading } from 'components/Loading/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ExercisesPageWrap } from './ExercisesPage.styled';


const ExercisesPage = () => {
  return (
    <Container style={{paddingBottom: "20px"}}>
      <ExercisesPageWrap>
        <ExercisesNav />
        <Suspense fallback={<Loading text="Loading..." />}>
          <Outlet />
        </Suspense>
      </ExercisesPageWrap>
      
    </Container>
  );
};

export default ExercisesPage;
