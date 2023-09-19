import icons from '../../../../assets/icons/svg-sprite.svg';
import { LogoutBtn, LogoutBtnSvg } from './LogoutButton.styled';

export const LogoutButton = () => {
  return (
    <LogoutBtn>
      Logout
      <LogoutBtnSvg>
        <use href={icons + '#icon-logout'}></use>
      </LogoutBtnSvg>
    </LogoutBtn>
  );
};
