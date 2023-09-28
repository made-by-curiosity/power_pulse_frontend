import { useState } from 'react';

import {
  InputWrapper,
  StyledInput,
  IconSearch,
  IconCancel,
  ButtonCancel,
  ButtonSearch,
} from './SearchProductField.styled';

import iconsPath from '../../assets/icons/svg-sprite.svg';

const iconCancel = (
  <IconCancel>
    <use href={iconsPath + '#icon-cancelsearch'}></use>
  </IconCancel>
);

const iconSearch = (
  <IconSearch>
    <use href={iconsPath + '#icon-search'}></use>
  </IconSearch>
);

export const SearchProductField = () => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event);
  };

  const resetValue = () => {
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        ></StyledInput>
        {value && (
          <ButtonCancel type="button" onClick={resetValue}>
            {iconCancel}
          </ButtonCancel>
        )}
        <ButtonSearch type="submit">{iconSearch}</ButtonSearch>
      </InputWrapper>
    </form>
  );
};
