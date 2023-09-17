import { LogoutButton, LogoutBtnText } from './LogoutBtn.styled';
import icons from '../../assets/icons/svg-sprite.svg';

const icon = (
  <svg width="20" height="20">
    <use href={icons + '#icon-logout'}></use>
  </svg>
);

export const LogoutBtn = () => {
  return (
    <LogoutButton>
      <LogoutBtnText>Logout</LogoutBtnText>
      {icon}
    </LogoutButton>
  );
};
