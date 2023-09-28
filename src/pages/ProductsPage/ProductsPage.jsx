import { Container } from 'components/Container/Container';
import { ProductsFilters } from 'components/ProductsFilters/ProductsFilters';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { ContentWrapper } from './ProductsPage.styled';

const ProductsPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <ProductsFilters />
        <ProductsList />
      </ContentWrapper>
    </Container>
  );
};

export default ProductsPage;
