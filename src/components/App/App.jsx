/* eslint-disable no-unused-vars */
import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { Layout } from 'components/Layout/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

import { ExercisesCategories } from 'components/ExercisesCategoryList/ExercisesCategories';
import { ExercisesListByCategory } from 'components/ExercisesList/ExercisesList';
import { Loading } from 'components/Loading/Loading';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isRefreshing && <Loading />}
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
            <Route index element={<Navigate to="bodyPart" />} />
            <Route
              path="bodyPart"
              element={<ExercisesCategories query={'body-parts'} />}
            ></Route>
            <Route
              path="bodyPart/:filter"
              element={<ExercisesListByCategory />}
            />
            <Route
              path="target"
              element={<ExercisesCategories query={'muscles'} />}
            ></Route>
            <Route
              path="target/:filter"
              element={<ExercisesListByCategory />}
            />
            <Route
              path="equipment"
              element={<ExercisesCategories query={'equipment'} />}
            ></Route>
            <Route
              path="equipment/:filter"
              element={<ExercisesListByCategory />}
            />
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
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Route>
      </Routes>
    </>
  );
};
