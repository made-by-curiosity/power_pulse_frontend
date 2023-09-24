import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/NewHeader/Header';

import { Loading } from 'components/Loading/Loading';
import { BurgerMenu } from 'components/NewHeader/BurgerMenu/BurgerMenu';

export const Layout = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const onBurgerButton = () => {
    console.log('dfsafdasfdsfdsffdsfdsfdsfds');
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <Header setMenuIsOpen={setMenuIsOpen} />
      {menuIsOpen && (
        <div onClick={onBurgerButton}>
          <BurgerMenu onBurgerButton={onBurgerButton} />
        </div>
      )}
      <Suspense fallback={<Loading text="Loading..." />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
