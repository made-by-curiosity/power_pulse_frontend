import { useDispatch } from 'react-redux';
import icons from '../../../../assets/icons/svg-sprite.svg';
import { LogoutBtn, LogoutBtnSvg } from './LogoutButton.styled';
import { logOut } from 'redux/auth/operations';

export const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <LogoutBtn onClick={handleLogOut}>
      Logout
      <LogoutBtnSvg>
        <use href={icons + '#icon-logout'}></use>
      </LogoutBtnSvg>
    </LogoutBtn>
  );
};
