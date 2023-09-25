import { Container } from 'components/Container/Container';
import { ExercisesNav } from 'components/ExercisesTabs/ExercisesNav';
import { Loading } from 'components/Loading/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const ExercisesPage = () => {
  return (
    <Container>
      <ExercisesNav />
      <Suspense fallback={<Loading text="Loading..." />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default ExercisesPage;
