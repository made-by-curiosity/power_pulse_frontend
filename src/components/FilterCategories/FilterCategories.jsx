import { StyledInput } from './FilterCategories.styled';

import iconsPath from '../../assets/icons/svg-sprite.svg';

const iconCancel = (
  <svg width="18" height="18" style={{ stroke: '#E6533C', strokeWidth: '2px' }}>
    <use href={iconsPath + '#icon-cancelsearch'}></use>
  </svg>
);

const iconSearch = (
  <svg
    width="18"
    height="18"
    style={{ strokeWidth: '1.5px', stroke: '#EFEDE8' }}
  >
    <use href={iconsPath + '#icon-search'}></use>
  </svg>
);

export const FilterCategories = () => {
  return (
    <>
      <StyledInput type="text"></StyledInput>
      {iconCancel}
      {iconSearch}
    </>
  );
};
