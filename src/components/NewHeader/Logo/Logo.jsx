import icons from '../../../assets/icons/svg-sprite.svg';

export const Logo = () => {
  return (
    <svg width="126" height="13">
      <use href={icons + '#logo'}></use>
    </svg>
  );
};
