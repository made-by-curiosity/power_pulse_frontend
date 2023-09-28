import { Container } from 'components/Container/Container';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { ContentWrapper } from './ProductsPage.styled';
import { MUIProductsFilters } from 'components/MUIProductsFilters/MUIProductsFilters';

const ProductsPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <MUIProductsFilters />
        <ProductsList />
      </ContentWrapper>
    </Container>
  );
};

export default ProductsPage;
