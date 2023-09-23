import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

import { LogoutButton, LogoutBtnText } from './LogoutBtn.styled';
import icons from '../../assets/icons/svg-sprite.svg';

const icon = (
  <svg width="20" height="20" style={{ stroke: '#E6533C' }}>
    <use href={icons + '#icon-logout'}></use>
  </svg>
);

export const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <LogoutButton type="button" onClick={handleLogout}>
      <LogoutBtnText>Logout</LogoutBtnText>
      {icon}
    </LogoutButton>
  );
};
