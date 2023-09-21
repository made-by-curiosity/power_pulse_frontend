import icons from '../../../../assets/icons/svg-sprite.svg';
import { BurgerLogoutBtn } from './BurgerLogoutButtom.styled';

export const BurgerLogoutButton = () => {
  return (
    <BurgerLogoutBtn>
      Logout
      <svg
        style={{
          width: 20,
          height: 20,
        }}
      >
        <use href={icons + '#logout'}></use>
      </svg>
    </BurgerLogoutBtn>
  );
};
