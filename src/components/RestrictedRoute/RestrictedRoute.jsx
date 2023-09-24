import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component, restrictedTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={restrictedTo} /> : component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  restrictedTo: PropTypes.string.isRequired,
};
