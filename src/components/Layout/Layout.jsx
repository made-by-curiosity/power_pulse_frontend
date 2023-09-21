import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/NewHeader/Header';

import { Loading } from 'components/Loading/Loading';

export const Layout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<Loading text="Loading..." />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
