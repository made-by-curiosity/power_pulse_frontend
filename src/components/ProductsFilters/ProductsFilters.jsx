import { FilterCategories } from 'components/FilterCategories/FilterCategories';
import { SearchProductField } from 'components/SearchProductField/SearchProductField';
import { FilterRecommended } from 'components/FilterRecommended/FilterRecommended';

import {
  ProductsFilterWrapper,
  FilterInnerWrapper,
} from './ProductsFilters.styled';

export const ProductsFilters = () => {
  return (
    <ProductsFilterWrapper>
      <SearchProductField></SearchProductField>
      <FilterInnerWrapper>
        <FilterCategories></FilterCategories>
        <FilterRecommended></FilterRecommended>
      </FilterInnerWrapper>
    </ProductsFilterWrapper>
  );
};
