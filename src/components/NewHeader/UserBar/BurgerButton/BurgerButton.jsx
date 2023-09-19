import icons from '../../../../assets/icons/svg-sprite.svg';
import { BurgerBtn, BurgerBtnSvg } from './BurgerButton.styled';

export const BurgerButton = ({ onClick }) => {
  return (
    <BurgerBtn onClick={onClick}>
      <BurgerBtnSvg>
        <use href={icons + '#icon-burger'}></use>
      </BurgerBtnSvg>
    </BurgerBtn>
  );
};
