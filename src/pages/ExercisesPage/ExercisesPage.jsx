import { Container } from 'components/Container/Container';
import { ExercisesNav } from 'components/ExercisesNav/ExercisesNav';
import { Loading } from 'components/Loading/Loading';
import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ExercisesPageWrap } from './ExercisesPage.styled';
import { SecondaryPageBg } from 'components/SecondaryPageBg/SecondaryPageBg';

const ExercisesPage = () => {
  const location = useLocation();

  const isFilter = location.pathname.length < 21;

  return (
    <SecondaryPageBg page="exercises" isFilter={isFilter}>
      <Container style={{ paddingBottom: '20px' }}>
        <ExercisesPageWrap>
          <ExercisesNav />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </ExercisesPageWrap>
      </Container>
    </SecondaryPageBg>
  );
};

export default ExercisesPage;
