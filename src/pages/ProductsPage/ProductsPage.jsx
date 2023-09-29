import { Container } from 'components/Container/Container';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { ContentWrapper } from './ProductsPage.styled';
import { MUIProductsFilters } from 'components/MUIProductsFilters/MUIProductsFilters';
import { Title } from 'components/Title/Title';
import { useState } from 'react';

const ProductsPage = () => {
  const [recommended, setRecommended] = useState('');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <ContentWrapper>
        <Title>Products</Title>
        <MUIProductsFilters
          recommended={recommended}
          setRecommended={setRecommended}
          category={category}
          setCategory={setCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ProductsList
          recommended={recommended}
          category={category}
          searchQuery={searchQuery}
        />
      </ContentWrapper>
    </Container>
  );
};

export default ProductsPage;
