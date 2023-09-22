import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserParams,
} from 'redux/auth/selectors';

export const PrivateAndRestrictedRoute = ({
  component,
  restrictedTo = '/',
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userParams = useSelector(selectUserParams);

  console.log(userParams);

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={restrictedTo} /> : component;
};

PrivateAndRestrictedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  restrictedTo: PropTypes.string.isRequired,
};
