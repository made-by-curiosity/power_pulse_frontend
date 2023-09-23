import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserParams,
} from 'redux/auth/selectors';

export const PrivateRoute = ({ component, restrictedTo = '/', samePage }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userParams = useSelector(selectUserParams);

  let isUserParamsEmpty = true;

  if (userParams) {
    if (!!Object.keys(userParams).length) {
      isUserParamsEmpty = false;
    }
  }

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  // if (samePage) {
  //   return shouldRedirect ? <Navigate to={restrictedTo} /> : component;
  // }

  if (samePage) {
    return shouldRedirect ? (
      <Navigate to={restrictedTo} />
    ) : isUserParamsEmpty ? (
      component
    ) : (
      <Navigate to="/diary" />
    );
  }

  return shouldRedirect ? (
    <Navigate to={restrictedTo} />
  ) : isUserParamsEmpty ? (
    <Navigate to="/params" />
  ) : (
    component
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  restrictedTo: PropTypes.string.isRequired,
};
