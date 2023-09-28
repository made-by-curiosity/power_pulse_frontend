import { Container } from 'components/Container/Container';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { ContentWrapper } from './ProductsPage.styled';
import { MUIProductsFilters } from 'components/MUIProductsFilters/MUIProductsFilters';
import { Title } from 'components/Title/Title';

const ProductsPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Products</Title>
        <MUIProductsFilters />
        <ProductsList />
      </ContentWrapper>
    </Container>
  );
};

export default ProductsPage;
