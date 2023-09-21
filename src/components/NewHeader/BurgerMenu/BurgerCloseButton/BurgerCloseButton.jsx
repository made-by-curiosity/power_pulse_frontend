import icons from '../../../../assets/icons/svg-sprite.svg';
import { BurgerCloseBtn, BurgerCloseBtnSvg } from './BurgerCloseButton.styled';

export const BurgerCloseButton = ({ onClick }) => {
  return (
    <BurgerCloseBtn onClick={onClick}>
      <BurgerCloseBtnSvg>
        <use href={icons + '#icon-closemodal'}></use>
      </BurgerCloseBtnSvg>
    </BurgerCloseBtn>
  );
};
