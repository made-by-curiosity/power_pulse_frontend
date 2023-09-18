import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component, restrictedTo = '/' }) => {
  const isLoggedIn = false;

  return isLoggedIn ? <Navigate to={restrictedTo} /> : component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  restrictedTo: PropTypes.string.isRequired,
};
