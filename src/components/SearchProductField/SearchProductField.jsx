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

export const SearchProductField = ({ searchQuery, setSearchQuery }) => {
  const handleChange = event => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const searchInputValue = event.target.elements[0].value;
    setSearchQuery(searchInputValue);
  };

  const resetValue = () => {
    setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleChange}
        ></StyledInput>
        {searchQuery && (
          <ButtonCancel type="button" onClick={resetValue}>
            {iconCancel}
          </ButtonCancel>
        )}
        <ButtonSearch type="submit">{iconSearch}</ButtonSearch>
      </InputWrapper>
    </form>
  );
};
