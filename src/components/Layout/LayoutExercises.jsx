import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ExercisesNav } from 'components/ExercisesTabs/ExercisesNav';

import { Loading } from 'components/Loading/Loading';

export const LayoutExercises = () => {
  return (
    <>
      <ExercisesNav />

      <Suspense fallback={<Loading text="Loading..." />}>
        <section>
          <Outlet />
        </section>
      </Suspense>
    </>
  );
};
