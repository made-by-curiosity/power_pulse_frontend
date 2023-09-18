import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// import { Example } from 'components/example/Example';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { Layout } from 'components/Layout/Layout';

const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));
const SignInPage = lazy(() => import('../../pages/SignInPage/SignInPage'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
const ParamsPage = lazy(() => import('../../pages/ParamsPage/ParamsPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'));
const DiaryPage = lazy(() => import('../../pages/DiaryPage/DiaryPage'));
const ExercisesPage = lazy(() =>
  import('../../pages/ExercisesPage/ExercisesPage')
);
const ProductsPage = lazy(() =>
  import('../../pages/ProductsPage/ProductsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);

export const App = () => {
  // эта проверка касается только перехода на страницу "/", проверка защищенных путей находится в компонентах RestrictedRoute и PrivateRoute
  const isLoggedIn = false;

  return (
    <div>
      {/* <Example /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              isLoggedIn ? <Navigate to="/diary" /> : <Navigate to="/welcome" />
            }
          />
          <Route
            path="/welcome"
            element={
              <RestrictedRoute
                component={<WelcomePage />}
                restrictedTo="/diary"
              />
            }
          />
          <Route
            path="/signin"
            element={
              <RestrictedRoute
                component={<SignInPage />}
                restrictedTo="/diary"
              />
            }
          />
          <Route
            path="/signup"
            element={
              <RestrictedRoute
                component={<SignUpPage />}
                restrictedTo="/diary"
              />
            }
          />

          <Route
            path="/params"
            element={
              <PrivateRoute component={<ParamsPage />} restrictedTo="/signin" />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute
                component={<ProfilePage />}
                restrictedTo="/signin"
              />
            }
          />
          <Route
            path="/diary"
            element={
              <PrivateRoute component={<DiaryPage />} restrictedTo="/signin" />
            }
          />
          <Route
            path="/exercises"
            element={
              <PrivateRoute
                component={<ExercisesPage />}
                restrictedTo="/signin"
              />
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute
                component={<ProductsPage />}
                restrictedTo="/signin"
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
