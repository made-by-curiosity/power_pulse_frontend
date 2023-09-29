import { useEffect, useState } from 'react';
import {
  FilterInnerWrapper,
  FiltersSpan,
  IconChevron,
  Option,
  Picker,
  ProductsFilterWrapper,
  SelectContainer,
  SelectWrapper,
} from './MUIProductsFilters.styled';
import icon from '../../assets/icons/svg-sprite.svg';
import { getProductFilters } from 'services/powerPulseApi';
import { SearchProductField } from 'components/SearchProductField/SearchProductField';

const capitalizeString = string => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

export const MUIProductsFilters = ({
  recommended,
  setRecommended,
  category,
  setCategory,
  searchQuery,
  setSearchQuery,
}) => {
  const [productsFilters, setProductsFilters] = useState([]);

  useEffect(() => {
    (async () => {
      const filters = await getProductFilters();
      setProductsFilters(filters[0].productsCategories);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRecommendedChange = e => {
    setRecommended(e.target.value);
  };

  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };

  return (
    <ProductsFilterWrapper>
      <FiltersSpan>Filters</FiltersSpan>
      <SearchProductField
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <FilterInnerWrapper>
        <SelectContainer>
          <SelectWrapper fullWidth>
            <Picker
              labelId="custom-input"
              id="custom-input"
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
            >
              <Option value={''} disabled>
                Categories
              </Option>
              {productsFilters.map(filter => (
                <Option key={filter} value={filter}>
                  {capitalizeString(filter)}
                </Option>
              ))}
            </Picker>
          </SelectWrapper>
          <IconChevron>
            <use href={`${icon}#icon-chevrondown`} />
          </IconChevron>
        </SelectContainer>
        <SelectContainer>
          <SelectWrapper fullWidth>
            <Picker
              labelId="custom-input"
              id="custom-input"
              value={recommended}
              onChange={handleRecommendedChange}
              displayEmpty
            >
              <Option value={''}>All</Option>
              <Option value={true}>Recommended</Option>
              <Option value={false}>Not recommended</Option>
            </Picker>
          </SelectWrapper>
          <IconChevron>
            <use href={`${icon}#icon-chevrondown`} />
          </IconChevron>
        </SelectContainer>
      </FilterInnerWrapper>
    </ProductsFilterWrapper>
  );
};
