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

export const MUIProductsFilters = ({ x }) => {
  const [productsFilters, setProductsFilters] = useState([]);
  const [recommended, setRecommended] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    (async () => {
      const filters = await getProductFilters();
      setProductsFilters(filters[0].productsCategories);
    })();
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
      <SearchProductField />
      <FilterInnerWrapper>
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
                  {filter}
                </Option>
              ))}
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
