import icons from '../../../../assets/icons/svg-sprite.svg';
import { LogoutBtn } from './LogoutButton.styled';

export const LogoutButton = () => {
  return (
    <LogoutBtn>
      Logout
      <svg
        style={{
          width: 20,
          height: 20,
        }}
      >
        <use href={icons + '#icon-logout'}></use>
      </svg>
    </LogoutBtn>
  );
};
