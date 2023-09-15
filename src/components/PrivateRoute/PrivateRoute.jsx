import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component, restrictedTo = '/' }) => {
  const isLoggedIn = true;
  const isRefreshing = false;

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={restrictedTo} /> : component;
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  restrictedTo: PropTypes.string.isRequired,
};
