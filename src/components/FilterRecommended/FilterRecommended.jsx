import {
  InputWrapper,
  StyledSelect,
  IconChevron,
  ButtonShevron,
} from './FilterRecommended.styled';

import iconsPath from '../../assets/icons/svg-sprite.svg';

const iconCancel = (
  <IconChevron>
    <use href={iconsPath + '#icon-chevrondown'}></use>
  </IconChevron>
);

const items = [
  { value: 1, text: 'All' },
  { value: 2, text: 'Recommended' },
  { value: 3, text: 'Not recommended' },
];

export const FilterRecommended = () => {
  return (
    <InputWrapper>
      <StyledSelect>
        {items.map(({ value, text }) => {
          return (
            <option value={value} key={value}>
              {text}
            </option>
          );
        })}
      </StyledSelect>

      <ButtonShevron type="button">{iconCancel}</ButtonShevron>
    </InputWrapper>
  );
};
