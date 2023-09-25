/* eslint-disable no-unused-vars */
import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// import { Example } from 'components/example/Example';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { Layout } from 'components/Layout/Layout';
<<<<<<< HEAD
import ExerciseNavigation from 'components/Nav/ExerciseNavigation';
=======
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

// import { MusculsList } from 'components/ExercisesTabs/MusculsList ';
// import { EquipmentsList } from 'components/ExercisesTabs/EquipmentsList';
>>>>>>> main

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
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      {/* <Example /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/welcome" />} />
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
              <PrivateRoute
                component={<ParamsPage />}
                restrictedTo="/signin"
                samePage
              />
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
          {/* ---------------------------------------------------------- */}
          <Route
            path="/exercises"
            element={
              <PrivateRoute
                component={<ExercisesPage />}
                restrictedTo="/signin"
              />
            }
          >
            <Route index element={<Navigate to="bodyparts" />} />
            <Route path="bodyparts" element={<div>bodyparts</div>}>
              <Route
                path="bodyparts/:filter"
                element={<div>Список упражнений по этому фильтру</div>}
              />
            </Route>
            <Route path="muscles" element={<div>muscles</div>}>
              <Route
                path="muscles/:filter"
                element={<div>Список упражнений по этому фильтру</div>}
              />
            </Route>
            <Route path="equipment" element={<div>equipment</div>}>
              <Route
                path="equipment/:filter"
                element={<div>Список упражнений по этому фильтру</div>}
              />
            </Route>
          </Route>
          {/* ---------------------------------------------------------- */}

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
