import { StyledInput } from './FilterCategories.styled';

import iconsPath from '../../assets/icons/svg-sprite.svg';

const iconCancel = (
  <svg width="20" height="20" style={{ fill: '#E6533C', stroke: '#E6533C' }}>
    <use href={iconsPath + '#cancelsearch'}></use>
  </svg>
);

export const FilterCategories = () => {
  return (
    <>
      <StyledInput type="text"></StyledInput>
      {iconCancel}
    </>
  );
};
