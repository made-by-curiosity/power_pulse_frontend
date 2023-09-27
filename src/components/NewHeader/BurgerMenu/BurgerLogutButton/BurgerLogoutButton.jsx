import { useDispatch } from 'react-redux';
import icons from '../../../../assets/icons/svg-sprite.svg';
import { BurgerLogoutBtn } from './BurgerLogoutButtom.styled';
import { logOut } from 'redux/auth/operations';

export const BurgerLogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <BurgerLogoutBtn onClick={handleLogOut}>
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
