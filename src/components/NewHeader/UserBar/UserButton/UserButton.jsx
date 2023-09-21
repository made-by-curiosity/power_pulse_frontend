import icons from '../../../../assets/icons/svg-sprite.svg';
import { UserBtnSvg } from './UserButton.styled';

export const UserButton = () => {
  return (
    <UserBtnSvg>
      <use href={icons + '#user'}></use>
      <use href={icons + '#circle'}></use>
    </UserBtnSvg>
  );
};
