import { Container } from 'components/Container/Container';
import { ProductsList } from 'components/ProductsList/ProductsList';
import { ContentWrapper } from './ProductsPage.styled';
import { MUIProductsFilters } from 'components/MUIProductsFilters/MUIProductsFilters';
import { Title } from 'components/Title/Title';
import { useState } from 'react';
import { Loading } from 'components/Loading/Loading';

const ProductsPage = () => {
  const [recommended, setRecommended] = useState('');
  const [category, setCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaderShown, setIsLoaderShown] = useState(false);

  return (
    <Container>
      {isLoaderShown && <Loading />}
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
          isLoaderShown={isLoaderShown}
          setIsLoaderShown={setIsLoaderShown}
        />
      </ContentWrapper>
    </Container>
  );
};

export default ProductsPage;
