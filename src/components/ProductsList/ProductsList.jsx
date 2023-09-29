import { getAllProducts } from 'services/powerPulseApi';
import { useState, useEffect } from 'react';
import {
  ProductsContainer,
  ProductList,
  ProductsItem,
  RadCircle,
  GreenCircle,
  InfoContainer,
  DietTitle,
  Recommend,
  CaloriesIcon,
  MenuContainer,
  MenuTitle,
  DataInfo,
  AddIcon,
  AddProduct,
  BtnAddProduct,
} from './ProductsList.styled';
import { ModalAddProduct } from 'components/ModalAddProduct/ModalAddProduct';
import { ModalAddProductSuccess } from 'components/ModalAddProductSuccess/ModalAddProductSuccess';

import icons from '../../assets/icons/svg-sprite.svg';

import { Notify } from 'notiflix';

import { useSelector } from 'react-redux';
import { selectUserParams } from 'redux/auth/selectors';
import { NoResultsMessage } from 'components/NoResultsMessage/NoResultsMessage';

const getBloodFilter = recommended => {
  switch (recommended) {
    case true:
      return 'recommended=true';
    case false:
      return 'recommended=false';
    default:
      return '';
  }
};

const filterProducts = (allProducts, category, searchQuery) => {
  const products = [];

  for (let i = 0; i < allProducts.length; i += 1) {
    const productCategory = allProducts[i].category;
    const productName = allProducts[i].title.toLowerCase();

    if (
      (!category || category === productCategory) &&
      productName.includes(searchQuery.toLowerCase())
    ) {
      products.push(allProducts[i]);
    }
  }

  return products;
};

export const ProductsList = ({
  recommended,
  category,
  searchQuery,
  setIsLoaderShown,
}) => {
  const [products, setProducts] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSuccessModal, setSuccessModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  const { blood } = useSelector(selectUserParams);

  const bloodFilter = getBloodFilter(recommended);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoaderShown(state => !state);
        const productsList = await getAllProducts(bloodFilter);
        setProducts(productsList);
      } catch (error) {
        Notify.failure('Ops...Something went wrong. Please try again.');
        console.log(error.message);
      } finally {
        setIsLoaderShown(state => !state);
      }
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bloodFilter]);

  const handleModalBtn = products => {
    setIsAddModalOpen(state => !state);
    setCurrentProduct(products);
  };

  const filteredProducts = filterProducts(products, category, searchQuery);

  const productsToShow = filteredProducts.slice(0, 20);

  return (
    <ProductsContainer>
      {isAddModalOpen && (
        <ModalAddProduct
          productInfo={currentProduct}
          toggleAddModal={() => setIsAddModalOpen(state => !state)}
          toggleSuccessModal={() => setSuccessModal(state => !state)}
        />
      )}
      {isSuccessModal && (
        <ModalAddProductSuccess
          onClose={() => setSuccessModal(state => !state)}
        />
      )}
      {productsToShow.length !== 0 ? (
        <ProductList>
          {productsToShow.map(
            ({
              calories,
              category,
              title,
              weight,
              _id,
              groupBloodNotAllowed,
            }) => {
              return (
                <ProductsItem key={_id}>
                  <InfoContainer>
                    <DietTitle>DIET</DietTitle>
                    {(blood === 1 && groupBloodNotAllowed[1]) ||
                    (blood === 2 && groupBloodNotAllowed[2]) ||
                    (blood === 3 && groupBloodNotAllowed[3]) ||
                    (blood === 4 && groupBloodNotAllowed[4]) ? (
                      <>
                        {' '}
                        <RadCircle />
                        <Recommend>Not Recommend</Recommend>
                      </>
                    ) : (
                      <>
                        {' '}
                        <GreenCircle />
                        <Recommend>Recommend</Recommend>
                      </>
                    )}
                    <BtnAddProduct
                      onClick={() =>
                        handleModalBtn({
                          calories,
                          category,
                          title,
                          weight,
                          _id,
                          groupBloodNotAllowed,
                        })
                      }
                    >
                      <AddProduct>Add</AddProduct>
                      <AddIcon>
                        <svg fill="#efede8">
                          {' '}
                          <use href={icons + '#icon-nextarrow'}></use>
                        </svg>
                      </AddIcon>
                    </BtnAddProduct>
                  </InfoContainer>
                  <MenuContainer>
                    <CaloriesIcon>
                      <svg fill="#efede8">
                        {' '}
                        <use href={icons + '#icon-running'}></use>
                      </svg>
                    </CaloriesIcon>
                    <MenuTitle>{title}</MenuTitle>
                  </MenuContainer>
                  <DataInfo>
                    <li>
                      Calories:<span>{calories}</span>
                    </li>
                    <li
                      style={{
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      Category: <span>{category}</span>
                    </li>
                    <li>
                      Weight:<span>{weight}</span>
                    </li>
                  </DataInfo>
                </ProductsItem>
              );
            }
          )}
        </ProductList>
      ) : (
        <NoResultsMessage />
      )}
    </ProductsContainer>
  );
};
