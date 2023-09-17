import icons from '../../../../assets/icons/svg-sprite.svg';
import { BurgerBtn } from './BurgerButton.styled';

export const BurgerButton = ({ onClick }) => {
  return (
    <BurgerBtn onClick={onClick}>
      <svg
        style={{
          width: 24,
          height: 24,
        }}
      >
        <use href={icons + '#icon-burger'}></use>
      </svg>
    </BurgerBtn>
  );
};
