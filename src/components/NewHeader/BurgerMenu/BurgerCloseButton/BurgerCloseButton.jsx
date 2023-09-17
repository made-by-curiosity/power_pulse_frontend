import icons from '../../../../assets/icons/svg-sprite.svg';
import { BurgerCloseBtn } from './BurgerCloseButton.styled';

export const BurgerCloseButton = ({ onClick }) => {
  return (
    <BurgerCloseBtn onClick={onClick}>
      <svg
        style={{
          width: 24,
          height: 24,
        }}
      >
        <use href={icons + '#icon-closemodal'}></use>
      </svg>
    </BurgerCloseBtn>
  );
};
